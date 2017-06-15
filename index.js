/* 
首页特效 
*/

var screenAnimatedElements = {
  '.main-swiper': [
    '.tip'
  ],
  '.main-ourServe-content': [
    '.serveContent_1', 
    '.serveContent_2', 
    '.serveContent_3'
  ],
  '.mian-case-desc': [
    '.caseDesc',
  ],
  '.main-case-content': [
    '.cases_item_1',
    '.cases_item_2',
    '.cases_item_3',
    '.cases_item_4'
  ],
  '.case-more': [
    '.viewMore'
  ],
  '.main-introduce-main': [
    '.content-1',
    '.content-2',
    '.content-3',
    '.content-4',
  ],
  '.main-news-content': [
    '.news_item_1',
    '.news_item_2',
    '.news_item_3'
  ],
  '.main-slogan': [
    '.first-sentence',
    '.second-sentence'
  ]
}

var screenAnimateElements = {
  '.main-ourServe-title': [
    '.serveTitle',
    '.servePic',
    '.serveDesc'
  ],
  '.main-aboutOur': [
    '.aboutTitle',
    '.aboutPic',
    '.aboutDesc'
  ],
  '.main-case-title': [
    '.caseTitle',
    '.casePic',
  ],
  '.main-introduce': [
    '.introduce-title',
    '.introduce-icon'
  ],
  '.main-news-title': [
    '.newsTitle',
    '.newsPic'
  ],
  '.main-news-desc': [
    '.newsDesc'
  ],
  '.main-gift-title': [
    '.giftTitle',
    '.giftPic'
  ],
  '.main-gift-desc': [
    '.giftDesc'
  ]
}


/*  
  @param screencls 当前屏幕的元素
*/
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

/* animation */
setScreenAnimate('.main-ourServe-title');
setScreenAnimate('.main-aboutOur');
setScreenAnimate('.main-case-title');
setScreenAnimate('.main-introduce');
setScreenAnimate('.main-news-title');
setScreenAnimate('.main-news-desc');
setScreenAnimate('.main-gift-title');
setScreenAnimate('.main-gift-desc');

/* animated */
var ChangeParam = {
  name: 'flipInX',
  time: 1.2,
  delayTime: ['0.3'],
  cycle: 1
}
setAnimated('.main-swiper', ChangeParam);
 
ChangeParam = {
  name: 'bounceInLeft',
  time: 1.2,
  delayTime: [
    '0.8',
    '0.7',
    '0.6'
  ],
  cycle: 1
}
setAnimated('.main-ourServe-content', ChangeParam);

ChangeParam = {
  name: 'bounceInDown',
  time: 1.2,
  delayTime: ['0.5'],
  cycle: 1
}
setAnimated('.mian-case-desc', ChangeParam);

ChangeParam = {
  name: 'bounceInUp',
  time: 1.2,
  delayTime: [
    '0.5',
    '0.6',
    '0.7',
    '0.8'
  ],
  cycle: 1
}
setAnimated('.main-case-content', ChangeParam);

ChangeParam = {
  name: 'rotateIn',
  time: 1.2,
  delayTime: [
    '0.6'
  ],
  cycle: 1
}
setAnimated('.case-more', ChangeParam);

ChangeParam = {
  name: 'slideInDown',
  time: 1.2,
  delayTime: [
    '0.6',
    '0.6',
    '0.6',
    '0.6',
  ],
  cycle: 1
}
setAnimated('.main-introduce-main', ChangeParam);

ChangeParam = {
  name: 'fadeIn',
  time: 1.2,
  delayTime: [
    '0.6',
    '0.5',
    '0.4',
  ],
  cycle: 1
}
setAnimated('.main-news-content', ChangeParam);

ChangeParam = {
  name: 'fadeInUp',
  time: 1.2,
  delayTime: [
    '0.6',
    '0.5',
  ],
  cycle: 1
}
setAnimated('.main-slogan', ChangeParam);