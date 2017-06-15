function setScreenAnimate(screenCls) {
  var screen = $(screenCls);
  var animateElements = screenAnimateElements[screenCls];

  isSetAnimateClass = false;   // 是否有初始化子元素的样式
  isSetAnimateAction = false;  // 是否所有子元素的状态为Action

  screen.on('click',function() {
    // 初始化样式 增加init  A_init
    if ( isSetAnimateClass === false) {
        for (var i = 0; i < animateElements.length; i++) {
          var $element = $(animateElements[i]);
          var baseCls = $element.attr('class');
          $element.attr('class',baseCls+ ' ' +animateElements[i].substr(1)+'_animate_init');
        }
        isSetAnimateClass = true;
        return;
    }
    // 切换 init -> action    
    if (isSetAnimateAction === false) {
      for (var i = 0; i < animateElements.length; i++) {
        var $element = $(animateElements[i]);
        var baseCls = $element.attr('class');
        $element.attr('class',baseCls.replace('_animate_init','_animate_action'));
      }
      isSetAnimateAction = true;
      return;
    }
    // 切换 action -> init
     if (isSetAnimateAction) {
      for (var i = 0; i < animateElements.length; i++) {
        var $element = $(animateElements[i]);
        var baseCls = $element.attr('class');
        $element.attr('class',baseCls.replace('_animate_action','_animate_init'));
      }
      isSetAnimateAction = false;
      return;
    }
  });
}

function setAnimated(screenCls, ChangeParam) {
  var paramLength = arguments.length;
  var screen = $(screenCls);
  var animatedElements = screenAnimatedElements[screenCls];
  isSetAnimateClass = false;   // 是否有初始化子元素的样式
  isSetAnimateAction = false;  // 是否所有子元素的状态为Action

  
  screen.on('click',function() {
        // '  ' -> 'animated'
        if ( isSetAnimateClass === false) {
            for (var i = 0; i < animatedElements.length; i++) {
              var $element = $(animatedElements[i]);
              var ele = document.querySelector(animatedElements[i]);
              ele.style.animation = ChangeParam.name + ' ' + ChangeParam.time + 's' + ' ' + ChangeParam.delayTime[i] +'s' + ' ' + ChangeParam.cycle;
              console.log(ele);
              var baseCls = $element.attr('class');
              $element.attr('class', baseCls+' animated');
            }
            isSetAnimateClass = true;
            return;
        }
        // 'animated' -> ' '
        if (isSetAnimateAction === false) {
          for (var i = 0; i < animatedElements.length; i++) {
            var $element = $(animatedElements[i]);
            $element.removeClass('animated');
            $element.removeAttr('style');
          }
          isSetAnimateAction = true;
          return;
        }
        // 循环
        if (isSetAnimateAction) {
          for (var i = 0; i < animatedElements.length; i++) {
            var $element = $(animatedElements[i]);
            var ele = document.querySelector(animatedElements[i]);
            ele.style.animation = ChangeParam.name + ' ' + ChangeParam.time + 's' + ' ' + ChangeParam.delayTime[i] +'s' + ' ' + ChangeParam.cycle;
            var baseCls = $element.attr('class');
            $element.attr('class', baseCls+' animated');
            console.log(333333);
          }
          isSetAnimateAction = false;
          return;
        }
      });
}