/**
 * @name BlurDiscord
 * @author Sigi
 * @description Blurs discord when you press |
 * @version 0.0.3
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
    if (this.isBlurred) {
      document.body.style.filter = "blur(25px)";
    } else {
      document.body.style.filter = "none";
    }
  }
}
