"use strict";var zIndexManager=function(){var items=document.querySelectorAll(".rect__item");items.forEach(function(item,i){item.style.zIndex=""+(10-i),item.style.animationDelay=.5*i+"s"})},worksTab=function(){function worksTab(autoPlay,autoPlayTime,transition){var _this=this;this.websitePreview=document.querySelector(".works__image"),this.websiteLink=document.querySelector(".works__button"),this.items=document.querySelectorAll(".rect__item"),this.nextButton=document.querySelector(".rect__button"),this.tabWrapper=document.querySelector(".works"),this.transition=null!==transition&&void 0!==transition?transition:500,this.websitePreview.style.transition=this.transition+"ms opacity",this.active=0,this.autoPlay=null===autoPlay||void 0===autoPlay||autoPlay,this.autoPlayTime=autoPlayTime>this.transition+1e3?autoPlayTime:this.transition+3e3,this.autoPlay&&(this.interval=setInterval(function(){return _this.switchTab()},this.autoPlayTime),this.tabWrapper.onmouseover=function(){return clearInterval(_this.interval)},this.tabWrapper.onmouseout=function(){return _this.interval=setInterval(function(){return _this.switchTab()},_this.autoPlayTime)}),this.items.forEach(function(item,i){return item.onclick=function(){return _this.switchTab(i)}}),this.nextButton.onclick=function(){_this.switchTab()}}return worksTab.prototype.switchTab=function(active){var _this=this;this.items.forEach(function(item){return item.classList.remove("active")}),this.websitePreview.style.opacity="0",this.changeActive(active),this.items[this.active].classList.add("active");var link=this.items[this.active].getAttribute("data-link"),image=this.items[this.active].getAttribute("data-image");setTimeout(function(){_this.websitePreview.style.opacity="1",_this.websiteLink.setAttribute("href",link),_this.websitePreview.setAttribute("src",image)},this.transition)},worksTab.prototype.changeActive=function(active){void 0===active?(this.active++,this.active>=this.items.length&&(this.active=0)):this.active=active},worksTab}();try{zIndexManager(),new worksTab}catch(error){console.dir(error)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsudHMiXSwibmFtZXMiOlsiekluZGV4TWFuYWdlciIsIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3R5bGUiLCJ6SW5kZXgiLCJhbmltYXRpb25EZWxheSIsIndvcmtzVGFiIiwiYXV0b1BsYXkiLCJhdXRvUGxheVRpbWUiLCJ0cmFuc2l0aW9uIiwiX3RoaXMiLCJ3ZWJzaXRlUHJldmlldyIsInF1ZXJ5U2VsZWN0b3IiLCJ3ZWJzaXRlTGluayIsIm5leHRCdXR0b24iLCJ0YWJXcmFwcGVyIiwiYWN0aXZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN3aXRjaFRhYiIsIm9ubW91c2VvdmVyIiwiY2xlYXJJbnRlcnZhbCIsIm9ubW91c2VvdXQiLCJvbmNsaWNrIiwicHJvdG90eXBlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib3BhY2l0eSIsImNoYW5nZUFjdGl2ZSIsImFkZCIsImxpbmsiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJkaXIiXSwibWFwcGluZ3MiOiJnQkFBTUEsQ0FBQUEsYUFBYSxDQUFHLFVBQUEsQ0FDcEIsR0FBTUMsQ0FBQUEsS0FBSyxDQUNUQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBREYsQ0FFQUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsU0FBQ0MsSUFBRCxDQUFPQyxDQUFQLENBQVEsQ0FDcEJELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxNQUFYLENBQW9CLElBQUcsR0FBS0YsQ0FBUixDQURBLENBRXBCRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0UsY0FBWCxDQUFtQyxFQUFKLENBQUFILENBQUMsQ0FBTSxHQUN2QyxDQUhELENBSUQsQyxDQUdESSxRQUFBLENBQUEsVUFBQSxDQVlFLFFBQUFBLENBQUFBLFFBQUEsQ0FBWUMsUUFBWixDQUFnQ0MsWUFB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S0FBS21CLE1BQWhCLEVBQXdCZSxZQUF4QixDQUFxQyxXQUFyQyxDQUxVLENBTWpCQyxLQUFLLENBQUcsS0FBS25DLEtBQUwsQ0FBVyxLQUFLbUIsTUFBaEIsRUFBd0JlLFlBQXhCLENBQXFDLFlBQXJDLENBTlMsQ0FRdkJFLFVBQVUsQ0FBQyxVQUFBLENBQ1R2QixLQUFJLENBQUNDLGNBQUwsQ0FBb0JSLEtBQXBCLENBQTBCd0IsT0FBMUIsQ0FBb0MsR0FEM0IsQ0FFVGpCLEtBQUksQ0FBQ0csV0FBTCxDQUFpQnFCLFlBQWpCLENBQThCLE1BQTlCLENBQXNDSixJQUF0QyxDQUZTLENBR1RwQixLQUFJLENBQUNDLGNBQUwsQ0FBb0J1QixZQUFwQixDQUFpQyxLQUFqQyxDQUF3Q0YsS0FBeEMsQ0FDRCxDQUpTLENBSVAsS0FBS3ZCLFVBSkUsQ0FLWCxDQVNILENBUEVILFFBQUEsQ0FBQWtCLFNBQUEsQ0FBQUksWUFBQSxDQUFBLFNBQWFaLE1BQWIsQ0FBNEIsQ0FDdEIsU0FBQUEsTUFEc0IsRUFHeEIsS0FBS0EsTUFBTCxFQUh3QixDQUlwQixLQUFLQSxNQUFMLEVBQWUsS0FBS25CLEtBQUwsQ0FBV3NDLE1BSk4sR0FJYyxLQUFLbkIsTUFBTCxDQUFjLENBSjVCLEdBQ0EsS0FBS0EsTUFBTCxDQUFjQSxNQUt6QyxDQUNILENBQUFWLFFBbEVBLENBQUEsRSxDQXNFQSxHQUFJLENBQ0ZWLGFBQWEsRUFEWCxDQUVGLEdBQUlVLENBQUFBLFFBQ0wsQ0FBQyxNQUFPOEIsS0FBUCxDQUFjLENBQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQ0QiLCJmaWxlIjoid29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHpJbmRleE1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXRlbXM6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+ID1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjdF9faXRlbVwiKTtcclxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGAkezEwIC0gaX1gO1xyXG4gICAgaXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAke2kgKiAwLjV9c2A7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuY2xhc3Mgd29ya3NUYWIge1xyXG4gIHdlYnNpdGVQcmV2aWV3OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHdlYnNpdGVMaW5rOiBIVE1MQW5jaG9yRWxlbWVudDtcclxuICBpdGVtczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgbmV4dEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgdGFiV3JhcHBlcjogSFRNTERpdkVsZW1lbnRcclxuICBhY3RpdmU6IG51bWJlcjtcclxuICB0cmFuc2l0aW9uOiBudW1iZXI7XHJcbiAgYXV0b1BsYXlUaW1lOiBudW1iZXI7XHJcbiAgYXV0b1BsYXk6IGJvb2xlYW47XHJcbiAgaW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoYXV0b1BsYXk/OiBib29sZWFuLCBhdXRvUGxheVRpbWU/OiBudW1iZXIsIHRyYW5zaXRpb24/OiBudW1iZXIpIHtcclxuICAgIHRoaXMud2Vic2l0ZVByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtzX19pbWFnZVwiKTtcclxuICAgIHRoaXMud2Vic2l0ZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtzX19idXR0b25cIik7XHJcbiAgICB0aGlzLml0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN0X19pdGVtXCIpO1xyXG4gICAgdGhpcy5uZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWN0X19idXR0b25cIik7XHJcbiAgICB0aGlzLnRhYldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3MnKVxyXG5cclxuICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb24gPz8gNTAwO1xyXG4gICAgdGhpcy53ZWJzaXRlUHJldmlldy5zdHlsZS50cmFuc2l0aW9uID0gYCR7dGhpcy50cmFuc2l0aW9ufW1zIG9wYWNpdHlgO1xyXG4gICAgdGhpcy5hY3RpdmUgPSAwO1xyXG4gICAgdGhpcy5hdXRvUGxheSA9IGF1dG9QbGF5ID8/IHRydWU7XHJcbiAgICB0aGlzLmF1dG9QbGF5VGltZSA9XHJcbiAgICAgIGF1dG9QbGF5VGltZSA+IHRoaXMudHJhbnNpdGlvbiArIDEwMDBcclxuICAgICAgICA/IGF1dG9QbGF5VGltZVxyXG4gICAgICAgIDogdGhpcy50cmFuc2l0aW9uICsgMzAwMDtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvUGxheSkge1xyXG4gICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5zd2l0Y2hUYWIoKSwgdGhpcy5hdXRvUGxheVRpbWUpO1xyXG4gICAgICB0aGlzLnRhYldyYXBwZXIub25tb3VzZW92ZXIgPSAoKSA9PiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICB0aGlzLnRhYldyYXBwZXIub25tb3VzZW91dCA9ICgpID0+XHJcbiAgICAgICAgKHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICAgICgpID0+IHRoaXMuc3dpdGNoVGFiKCksXHJcbiAgICAgICAgICB0aGlzLmF1dG9QbGF5VGltZVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4gKGl0ZW0ub25jbGljayA9ICgpID0+IHRoaXMuc3dpdGNoVGFiKGkpKSk7XHJcbiAgICB0aGlzLm5leHRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zd2l0Y2hUYWIoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hUYWIoYWN0aXZlPzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgICB0aGlzLndlYnNpdGVQcmV2aWV3LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKGFjdGl2ZSk7XHJcbiAgICB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgY29uc3QgbGluayA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVdLmdldEF0dHJpYnV0ZShcImRhdGEtbGlua1wiKTtcclxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbWFnZVwiKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy53ZWJzaXRlUHJldmlldy5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgIHRoaXMud2Vic2l0ZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBsaW5rKTtcclxuICAgICAgdGhpcy53ZWJzaXRlUHJldmlldy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2UpO1xyXG4gICAgfSwgdGhpcy50cmFuc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUFjdGl2ZShhY3RpdmU/OiBudW1iZXIpIHtcclxuICAgIGlmIChhY3RpdmUgIT09IHVuZGVmaW5lZCkgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hY3RpdmUrKztcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlID49IHRoaXMuaXRlbXMubGVuZ3RoKSB0aGlzLmFjdGl2ZSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbnRyeSB7XHJcbiAgekluZGV4TWFuYWdlcigpO1xyXG4gIG5ldyB3b3Jrc1RhYigpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIGNvbnNvbGUuZGlyKGVycm9yKTtcclxufSJdfQ==