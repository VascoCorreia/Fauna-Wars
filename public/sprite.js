class Sprite {
    constructor(animation, speed) {
        this.x = x * 0.28;
        this.y = y * 0.15;
        this.animation = animation;
        this.len = this.animation.length;
        this.speed = speed;
        this.index = 0;
    }

    show() {
        let index = floor(this.index) % this.len;
        image(this.animation[index], this.x, this.y);
    }

    animate() {
        this.index += this.speed;
    }
}