/**
 * Copyright 2026 jtarchb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./project-1-card.js";
import "./project-1-arrow.js";
import "./project-1-dot.js";
 
export class Project1 extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() { return "project-1"; }
 
  static properties = {
    source: { type: String },
    activeIndex: { type: Number, reflect: true },
    _posts: { state: true },
    _loading: { state: true },
    _likes: { state: true },
  };
 
  constructor() {
    super();
    this.source = "/api/photos";
    this.activeIndex = 0;
    this._posts = [];
    this._loading = true;
    this._likes = {};
    this.t = { ...this.t, title: "Title" };
    this.registerLocalization({
      context: this,
      localesPath: new URL("./locales/project-1.ar.json", import.meta.url).href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }
 
  firstUpdated() {
    super.firstUpdated && super.firstUpdated();
    const params = new URLSearchParams(window.location.search);
    const fromUrl = parseInt(params.get("activeIndex"));
    if (!isNaN(fromUrl) && fromUrl >= 0) this.activeIndex = fromUrl;
    try {
      const stored = localStorage.getItem("project-1-likes");
      if (stored) this._likes = JSON.parse(stored);
    } catch (e) { this._likes = {}; }
    this._fetchData();
  }
 
  updated(changedProperties) {
    super.updated && super.updated(changedProperties);
    if (changedProperties.has("activeIndex")) {
      const params = new URLSearchParams(window.location.search);
      params.set("activeIndex", this.activeIndex);
      window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
    }
  }
 
  async _fetchData() {
    this._loading = true;
    try {
      const res = await fetch(this.source);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this._posts = data.items || [];
      if (this.activeIndex >= this._posts.length) this.activeIndex = 0;
    } catch (e) {
      console.error("project-1: failed to load data", e);
      this._posts = [];
    } finally {
      this._loading = false;
    }
  }
 
  _prev() { if (this.activeIndex > 0) this.activeIndex--; }
  _next() { if (this.activeIndex < this._posts.length - 1) this.activeIndex++; }
 
  _handleLikeChanged(e) {
    const { index, liked } = e.detail;
    const updated = { ...this._likes };
    liked ? (updated[index] = "liked") : delete updated[index];
    this._likes = updated;
    this._saveLikes();
  }
 
  _handleDislikeChanged(e) {
    const { index, disliked } = e.detail;
    const updated = { ...this._likes };
    disliked ? (updated[index] = "disliked") : delete updated[index];
    this._likes = updated;
    this._saveLikes();
  }
 
  _saveLikes() {
    try { localStorage.setItem("project-1-likes", JSON.stringify(this._likes)); }
    catch (e) { console.warn("project-1: could not save to localStorage"); }
  }
 
  static styles = [
    super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-primary);
        background: var(--ddd-theme-default-slateLight);
        border-radius: var(--ddd-radius-lg);
        overflow: hidden;
        position: relative;
      }
      .slides {
        display: flex;
        transition: transform 0.4s ease;
        min-height: 520px;
      }
      .arrows {
        position: absolute;
        top: 38%;
        left: var(--ddd-spacing-2);
        right: var(--ddd-spacing-2);
        display: flex;
        justify-content: space-between;
        pointer-events: none;
        transform: translateY(-50%);
        z-index: 10;
      }
      project-1-arrow { pointer-events: auto; }
      .dots {
        display: flex;
        justify-content: center;
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
        background: white;
        border-top: 1px solid var(--ddd-theme-default-slateMaxLight);
        flex-wrap: wrap;
      }
      .status {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 300px;
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-theme-default-limestoneGray);
      }
      @media (prefers-color-scheme: dark) {
        :host { background: #1a1a1a; }
        .dots { background: #1e1e1e; border-color: #333; }
      }
      @media (max-width: 480px) {
        .slides { min-height: 420px; }
        .arrows { left: var(--ddd-spacing-1); right: var(--ddd-spacing-1); }
      }
    `,
  ];
 
  render() {
    if (this._loading) return html`<div class="status">Loading...</div>`;
    if (!this._posts.length) return html`<div class="status">No photos found.</div>`;
 
    return html`
      <div
        class="slides"
        style="transform: translateX(-${this.activeIndex * 100}%);"
        @like-changed=${this._handleLikeChanged}
        @dislike-changed=${this._handleDislikeChanged}
      >
        ${this._posts.map((post, i) => html`
          <project-1-card
            .post=${post}
            .index=${i}
            .active=${i === this.activeIndex}
            .liked=${this._likes[i] === "liked"}
            .disliked=${this._likes[i] === "disliked"}
          ></project-1-card>
        `)}
      </div>
 
      <div class="arrows">
        <project-1-arrow direction="left" ?disabled=${this.activeIndex === 0}
          @arrow-click=${() => this._prev()}></project-1-arrow>
        <project-1-arrow direction="right" ?disabled=${this.activeIndex === this._posts.length - 1}
          @arrow-click=${() => this._next()}></project-1-arrow>
      </div>
 
      <div class="dots">
        ${this._posts.map((_, i) => html`
          <project-1-dot .index=${i} .active=${i === this.activeIndex}
            @dot-click=${(e) => { this.activeIndex = e.detail.index; }}></project-1-dot>
        `)}
      </div>
    `;
  }
 
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}
 
customElements.define(Project1.tag, Project1);