/**
 * Copyright 2026 jtarchb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `project-1`
 *
 * @demo index.html
 * @element project-1
 */
export class Project1 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-1";
  }

  constructor() {
    super();
    this.title = "Fox title";
    this.foxImage = "";
    this.foxLink = "";
    this.liked = false;
    this.disliked = false;
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/project-1.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      foxImage: { type: String },
      foxLink: { type: String },
      liked: { type: Boolean },
      disliked: { type: Boolean },
    };
  }

  // Runs automatically when the element is added to the page
  connectedCallback() {
    super.connectedCallback();
    this.fetchFox();
  }

  // Fetches a random fox from the API
  async fetchFox() {
    const response = await fetch("https://randomfox.ca/floof/");
    const data = await response.json();
    this.foxImage = data.image;
    this.foxLink = data.link;
  }

  // Called when the like button is clicked
  handleLike() {
    this.liked = !this.liked;
    if (this.liked) this.disliked = false;
  }

  // Called when the dislike button is clicked
  handleDislike() {
    this.disliked = !this.disliked;
    if (this.disliked) this.liked = false;
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        background-color: var(--ddd-theme-accent);
        color: var(--ddd-theme-primary);
      }

      /* Outer wrapper centers the card on the page */
      .wrapper {
        display: flex;
        justify-content: center;
        padding: var(--ddd-spacing-4);
      }

      /* The card itself */
      .card {
        background: white;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        width: 100%;
        max-width: 400px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      /* Title bar at the top of the card */
      .card-title {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
        font-size: var(--ddd-font-size-m);
        font-weight: bold;
        border-bottom: 1px solid #dbdbdb;
        background-color: var(--ddd-theme-primary);
        color: white;
        text-align: center;
      }

      /* Image row: arrows on left/right, image in middle */
      .image-row {
        display: flex;
        align-items: center;
        background: #000;
      }

      .arrow-btn {
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: var(--ddd-spacing-2);
        flex-shrink: 0;
      }

      .arrow-btn:hover {
        opacity: 0.7;
      }

      .fox-image {
        flex: 1;
        width: 100%;
        display: block;
        max-height: 350px;
        object-fit: cover;
      }

      /* Row below image: like/dislike on left, username on right */
      .action-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-top: 1px solid #dbdbdb;
      }

      .like-buttons {
        display: flex;
        gap: var(--ddd-spacing-2);
      }

      .like-btn, .dislike-btn {
        background: none;
        border: none;
        font-size: 22px;
        cursor: pointer;
        transition: transform 0.1s;
      }

      .like-btn:active, .dislike-btn:active {
        transform: scale(1.3);
      }

      .username {
        font-size: var(--ddd-font-size-s);
        color: #555;
        font-weight: bold;
      }

      /* Description section at the bottom of the card */
      .description {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
        font-size: var(--ddd-font-size-xs);
        color: #333;
        border-top: 1px solid #dbdbdb;
        line-height: 1.5;
      }

      .description a {
        color: var(--ddd-theme-primary);
        text-decoration: none;
      }

      .description a:hover {
        text-decoration: underline;
      }

      /* Refresh button */
      .refresh-btn {
        display: block;
        width: calc(100% - var(--ddd-spacing-8));
        margin: var(--ddd-spacing-3) auto;
        padding: var(--ddd-spacing-2);
        background-color: var(--ddd-theme-primary);
        color: white;
        border: none;
        border-radius: 6px;
        font-size: var(--ddd-font-size-s);
        cursor: pointer;
      }

      .refresh-btn:hover {
        opacity: 0.85;
      }

      /* Loading state */
      .loading {
        text-align: center;
        padding: var(--ddd-spacing-8);
        color: #888;
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .card {
          background: #1a1a1a;
          border-color: #333;
          color: #eee;
        }
        .description {
          color: #ccc;
        }
        .username {
          color: #aaa;
        }
      }

      /* Mobile responsiveness */
      @media (max-width: 480px) {
        .wrapper {
          padding: var(--ddd-spacing-2);
        }
        .card {
          border-radius: 0;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="card">

          <!-- Title bar -->
          <div class="card-title">${this.title}</div>

          <!-- Image with arrows -->
          <div class="image-row">
            <button class="arrow-btn" @click=${this.fetchFox} title="Previous">&#8592;</button>

            ${this.foxImage
              ? html`<img class="fox-image" src="${this.foxImage}" alt="Random Fox" />`
              : html`<div class="loading">Loading fox...</div>`
            }

            <button class="arrow-btn" @click=${this.fetchFox} title="Next">&#8594;</button>
          </div>

          <!-- Like/dislike + username row -->
          <div class="action-row">
            <div class="like-buttons">
              <button class="like-btn" @click=${this.handleLike} title="Like">
                ${this.liked ? "❤️" : "🤍"}
              </button>
              <button class="dislike-btn" @click=${this.handleDislike} title="Dislike">
                ${this.disliked ? "👎" : "👍"}
              </button>
            </div>
            <span class="username">@randomfox</span>
          </div>

          <!-- Description -->
          <div class="description">
            Enter Discription
            <a href="${this.foxLink}" target="_blank">original photo</a>.
            <br/>
            <em>Click the arrows or refresh button to see another fox.</em>
          </div>

          <!-- Refresh button -->
          <button class="refresh-btn" @click=${this.fetchFox}>New Fox</button>

        </div>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(Project1.tag, Project1);