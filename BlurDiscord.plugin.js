/**
 * @name BlurDiscord
 * @author Sigi
 * @description Blurs discord when you press |
 * @version 0.0.4
 */

module.exports = class BlurDiscord {
  constructor() {
    this.isBlurred = false;
  }

  start() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  stop() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
    if (this.isBlurred) {
      this.toggleBlur();
    }
  }

  handleKeyDown(ev) {
    if (ev.key === "|" && !ev.repeat) {
      ev.preventDefault();
      this.toggleBlur();
    }
  }

  toggleBlur() {
    this.isBlurred = !this.isBlurred;
    const body = document.body;
    if (this.isBlurred) {
      body.style.transition = "filter 0.2s ease-out"; 
      body.style.filter = "blur(10px)";
    } else {
      body.style.transition = "filter 0.2s ease-in"; 
      body.style.filter = "none";
    }
  }
}