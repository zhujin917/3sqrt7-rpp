// eslint-disable-next-line no-unused-vars
class _3sqrt7_Rpp {
    constructor(element) {
        this.element = element;
        this.screensNum = element.children.length;

        this.controller = document.createElement("div");
        this.controller.classList.add("rpp-controller");

        this.playButton = document.createElement("div");
        this.playButton.classList.add("rpp-play");
        this.playButton.innerText = "暂停";
        this.playButton.addEventListener("click", () => {
            if (this.isPlaying) {
                this.stop();
                this.playButton.innerText = "播放";
                this.isPlaying = false;
            }
            else {
                this.play();
                this.playButton.innerText = "暂停";
                this.isPlaying = true;
            }
        });
        this.controller.appendChild(this.playButton);

        for (let i = 0; i < this.element.children.length; i += 1) {
            let switchButton = document.createElement("div");
            switchButton.classList.add("rpp-switch");
            if (i == this.num) {
                switchButton.style.background = "#1e9fff";
            }
            switchButton.addEventListener("click", () => {
                this.switchTo(i);
            });
            this.controller.appendChild(switchButton);
        }
        this.element.appendChild(this.controller);

        this.progressBar = document.createElement("div");
        this.progressBar.classList.add("rpp-progress");
        this.element.appendChild(this.progressBar);

        element.children[0].style.opacity = "1";
        element.children[0].style.display = "block";
        this.play();
    }
    element;
    screensNum;
    controller;
    playButton;
    progressBar;

    num = 0;
    progress = 0;
    timer = null;
    isPlaying = true;

    getNext = () => (this.num == this.screensNum - 1) ? 0 : this.num + 1;
    getPrevious = () => (this.num == 0) ? this.screensNum - 1 : this.num - 1;

    switchTo(targetNum) {
        this.num = targetNum;
        this.controller.children[this.getPrevious() + 1].style.background = "transparent";
        this.controller.children[this.num + 1].style.background = "#1e9fff";
        this.element.children[this.getPrevious()].style.opacity = "0";

        setTimeout(() => {
            this.element.children[this.getPrevious()].style.display = "none";
        }, 230);
        setTimeout(() => {
            this.element.children[this.num].style.display = "block";
        }, 240);
        setTimeout(() => {
            this.element.children[this.num].style.opacity = "1";
        }, 260);
        clearTimeout(this.timer);

        if (this.isPlaying) {
            this.progressBar.style.width = "0";
            this.progress = 0;
            this.play();
        }
    };
    play() {
        this.progress += 0.08;
        this.progressBar.style.width = `calc(${this.progress}% - 16px)`;
        if (this.progress < 100) {
            this.timer = setTimeout(() => {
                this.play();
            }, 1);
        }
        else {
            this.switchTo(this.getNext());
        }
    };
    stop() {
        clearTimeout(this.timer);
    };
}

export default _3sqrt7_Rpp;