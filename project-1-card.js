/**
 * Copyright 2026 jtarchb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project1Card extends DDDSuper(LitElement) {
  static get tag() { return "project-1-card"; }

  static properties = {
    post: { type: Object },
    index: { type: Number },
    liked: { type: Boolean },
    disliked: { type: Boolean },
    active: { type: Boolean, reflect: true },
    _imageLoaded: { state: true },
    _shareSuccess: { state: true },
  };

  constructor() {
    super();
    this.post = null;
    this.index = 0;
    this.liked = false;
    this.disliked = false;
    this.active = false;
    this._imageLoaded = false;
    this._shareSuccess = false;
  }

  updated(changedProperties) {
    if (changedProperties.has("post")) {
      this._imageLoaded = false;
      this._shareSuccess = false;
    }
  }

  _dispatch(name, detail) {
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true, detail }));
  }

  _handleLike() {
    const liked = !this.liked;
    this._dispatch("like-changed", { index: this.index, liked });
    if (liked && this.disliked) this._dispatch("dislike-changed", { index: this.index, disliked: false });
  }

  _handleDislike() {
    const disliked = !this.disliked;
    this._dispatch("dislike-changed", { index: this.index, disliked });
    if (disliked && this.liked) this._dispatch("like-changed", { index: this.index, liked: false });
  }

  async _handleShare() {
    const url = `${window.location.origin}${window.location.pathname}?activeIndex=${this.index}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: this.post?.title || "Photo", url });
      } else {
        await navigator.clipboard.writeText(url);
        this._shareSuccess = true;
        setTimeout(() => { this._shareSuccess = false; }, 2000);
      }
    } catch (e) { /* cancelled */ }
  }

  static styles = [
    super.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: var(--ddd-theme-default-slateLight);
      }
      .author-row {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
        border-bottom: 1px solid var(--ddd-theme-default-slateMaxLight);
        background: white;
      }
      .author-avatar, .author-avatar-placeholder {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        flex-shrink: 0;
        border: 2px solid var(--ddd-theme-default-beaverBlue);
      }
      .author-avatar { object-fit: cover; }
      .author-avatar-placeholder { background: var(--ddd-theme-default-slateMaxLight); }
      .author-name {
        font-family: var(--ddd-font-primary);
        font-weight: var(--ddd-font-weight-bold);
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-theme-default-nittanyNavy);
      }
      .author-channel {
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-limestoneGray);
      }
      .image-area {
        position: relative;
        background: #111;
        overflow: hidden;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 260px;
        max-height: 360px;
      }
      .photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: opacity 0.3s ease;
      }
      .photo.hidden { opacity: 0; position: absolute; }
      .placeholder {
        color: var(--ddd-theme-default-limestoneGray);
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-sm);
        padding: var(--ddd-spacing-8);
      }
      .action-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        background: white;
        border-top: 1px solid var(--ddd-theme-default-slateMaxLight);
      }
      .left-actions { display: flex; gap: var(--ddd-spacing-2); }
      .action-btn, .share-btn {
        background: none;
        border: 2px solid var(--ddd-theme-default-slateMaxLight);
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        cursor: pointer;
        color: var(--ddd-theme-default-nittanyNavy);
        transition: background 0.15s, border-color 0.15s, color 0.15s;
      }
      .action-btn:hover, .share-btn:hover { background: var(--ddd-theme-default-slateMaxLight); }
      .action-btn.liked { border-color: var(--ddd-theme-default-original87Pink); color: var(--ddd-theme-default-original87Pink); background: #fff0f4; }
      .action-btn.disliked { border-color: var(--ddd-theme-default-beaverBlue); color: var(--ddd-theme-default-beaverBlue); background: #f0f6ff; }
      .share-btn.copied { border-color: var(--ddd-theme-default-forestGreen); color: var(--ddd-theme-default-forestGreen); }
      .card-body {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4) var(--ddd-spacing-4);
        background: white;
        border-top: 1px solid var(--ddd-theme-default-slateMaxLight);
      }
      .card-title {
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-sm);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-nittanyNavy);
        margin-bottom: var(--ddd-spacing-1);
      }
      .card-date {
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-limestoneGray);
        margin-bottom: var(--ddd-spacing-2);
      }
      .card-description {
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalyGray);
        line-height: 1.6;
      }
      .card-description a { color: var(--ddd-theme-default-beaverBlue); text-decoration: none; }
      .card-description a:hover { text-decoration: underline; }
      @media (prefers-color-scheme: dark) {
        :host { background: #1a1a1a; }
        .author-row, .action-row, .card-body { background: #1e1e1e; border-color: #333; }
        .author-name, .card-title { color: #eee; }
        .author-channel, .card-date { color: #888; }
        .card-description { color: #bbb; }
        .action-btn, .share-btn { color: #ccc; border-color: #444; }
        .action-btn:hover, .share-btn:hover { background: #2a2a2a; }
        .action-btn.liked { background: #2a1520; }
        .action-btn.disliked { background: #0f1e2a; }
      }
      @media (max-width: 480px) {
        .image-area { min-height: 200px; max-height: 260px; }
      }
    `,
  ];

  render() {
    if (!this.post) return html`<div class="placeholder">No photo data.</div>`;

    const { title, source, thumb, description, dateTaken, link, author } = this.post;
    const imgSrc = this.active ? (source || thumb || "") : "";

    return html`
      <div class="author-row">
        ${author?.image
          ? html`<img class="author-avatar" src="${author.image}" alt="${author.name}" loading="lazy" />`
          : html`<div class="author-avatar-placeholder"></div>`}
        <div>
          <div class="author-name">${author?.name || "Unknown"}</div>
          ${author?.channel ? html`<div class="author-channel">${author.channel}</div>` : ""}
        </div>
      </div>

      <div class="image-area">
        ${imgSrc ? html`
          <img class="photo ${this._imageLoaded ? "" : "hidden"}" src="${imgSrc}"
            alt="${title || "Photo"}" @load=${() => { this._imageLoaded = true; }} />
          ${!this._imageLoaded ? html`<div class="placeholder">Loading...</div>` : ""}
        ` : html`<div class="placeholder">Loading...</div>`}
      </div>

      <div class="action-row">
        <div class="left-actions">
          <button class="action-btn ${this.liked ? "liked" : ""}" @click=${this._handleLike}
            aria-pressed=${this.liked}>${this.liked ? "Liked" : "Like"}</button>
          <button class="action-btn ${this.disliked ? "disliked" : ""}" @click=${this._handleDislike}
            aria-pressed=${this.disliked}>${this.disliked ? "Disliked" : "Dislike"}</button>
        </div>
        <button class="share-btn ${this._shareSuccess ? "copied" : ""}" @click=${this._handleShare}>
          ${this._shareSuccess ? "Copied!" : "Share"}
        </button>
      </div>

      <div class="card-body">
        <div class="card-title">${title || "Untitled"}</div>
        ${dateTaken ? html`<div class="card-date">${dateTaken}</div>` : ""}
        <div class="card-description">
          ${description || ""}
          ${link ? html` <a href="${link}" target="_blank" rel="noopener noreferrer">View source</a>` : ""}
        </div>
      </div>
    `;
  }
}

customElements.define(Project1Card.tag, Project1Card);