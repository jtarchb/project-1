/**
 * Copyright 2026 jtarchb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
 
export class Project1Arrow extends DDDSuper(LitElement) {
  static get tag() {
    return "project-1-arrow";
  }
 
  static properties = {
    direction: { type: String },
    disabled: { type: Boolean, reflect: true },
  };
 
  constructor() {
    super();
    this.direction = "left";
    this.disabled = false;
  }
 
  static styles = [
    super.styles,
    css`
      :host {
        display: inline-flex;
      }
 
      button {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: 3px solid var(--ddd-theme-default-beaverBlue);
        background: #f7f7f7;
        color: var(--ddd-theme-default-beaverBlue);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.3rem;
        font-weight: 700;
        line-height: 1;
        padding: 0;
        box-sizing: border-box;
        transition: opacity 0.2s;
      }
 
      button:disabled {
        opacity: 0.3;
        cursor: default;
      }
 
      @media (prefers-color-scheme: dark) {
        button {
          background: #2a2a2a;
        }
      }
    `,
  ];
 
  render() {
    const label = this.direction === "left" ? "Previous slide" : "Next slide";
    return html`
      <button @click=${this._click} aria-label=${label} ?disabled=${this.disabled}>
        ${this.direction === "left" ? "‹" : "›"}
      </button>
    `;
  }
 
  _click() {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent("arrow-click", {
        bubbles: true,
        composed: true,
        detail: { direction: this.direction },
      })
    );
  }
}
 
customElements.define(Project1Arrow.tag, Project1Arrow);