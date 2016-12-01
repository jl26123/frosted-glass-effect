#Frosted Glass Effect
Messing around with a way to create the effect of blurring everything behind and element. Currently this is natively possible in Safari with a backdrop filter, but not other browsers support it.

The idea is to duplicate everything that will be blurred, use either an svg or css filter to blur the contents, and then crop the container to the overlaying element's size with overflow hidden.

This is a super rough initial concept. The root index page uses the effect with a draggable element. The nav-demo uses the effect in a flyout menu.
