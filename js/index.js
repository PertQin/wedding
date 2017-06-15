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
  '.main-case-desc': [
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
  ],
  '.main-gift-content': [
    '.pro-list'
  ],
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

var changeParamArr = [
  {
    name: 'flipInX',
    time: 1.2,
    delayTime: ['0.3'],
    cycle: 1
  },
  {
    name: 'bounceInLeft',
    time: 1.2,
    delayTime: [
      '0.3',
      '0.7',
      '0.6'
    ],
    cycle: 1
  },
   {
    name: 'bounceInDown',
    time: 1.2,
    delayTime: ['0.5'],
    cycle: 1
  },
  {
    name: 'bounceInUp',
    time: 1.2,
    delayTime: [
      '0.5',
      '0.6',
      '0.7',
      '0.8'
    ],
    cycle: 1
  },
  {
    name: 'rotateIn',
    time: 1.2,
    delayTime: [
      '0.6'
    ],
    cycle: 1
  },
   {
    name: 'slideInDown',
    time: 1.2,
    delayTime: [
      '0.6',
      '0.6',
      '0.6',
      '0.6',
    ],
    cycle: 1
  },
   {
    name: 'zoomIn',
    time: 1.2,
    delayTime: [
      '0.4',
      '0.5',
      '0.6',
    ],
    cycle: 1
  },
   {
    name: 'fadeInUp',
    time: 1.2,
    delayTime: [
      '0.6',
      '0.5',
    ],
    cycle: 1
  },
  {
    name: 'lightSpeedIn',
    time: 1.2,
    delayTime: [
      '0.6'
    ],
    cycle: 1
  }
]

// 设置元素初始状态 
var setScreenAnimationInit = function (screenCls) {
   var screen = $(screenCls);
   var animateElements = screenAnimateElements[screenCls];
   for (var i = 0; i < animateElements.length; i++) {
      var $element = $(animateElements[i]);
      var baseCls = $element.attr('class');
      $element.attr('class',baseCls+ ' ' +animateElements[i].substr(1)+'_animate_init');
  }
}

var setScreenAnimatedInit = function (screenCls, ChangeParam) {
   var screen = $(screenCls);
   var animatedElements = screenAnimatedElements[screenCls];
   for (var i = 0; i < animatedElements.length; i++) {
      var $element = $(animatedElements[i]);
      var ele = document.querySelector(animatedElements[i]);
      ele.style.animation = ChangeParam.name + ' ' + ChangeParam.time + 's' + ' ' + ChangeParam.delayTime[i] +'s' + ' ' + ChangeParam.cycle;
      var baseCls = $element.attr('class');
      $element.attr('class', baseCls+' animated');
  }
}


// 设置播放屏内元素
var playScreenAnimationAction = function (screenCls) {
  var screen = $(screenCls);
  var animateElements = screenAnimateElements[screenCls];
  for (var i = 0; i < animateElements.length; i++) {
    var $element = $(animateElements[i]);
    var baseCls = $element.attr('class');
    $element.attr('class',baseCls.replace('_animate_init','_animate_action'));
 }
}

// animate动画完成 
var setScreenAnimatedFinish = function (screenCls) {
   var animatedElements = screenAnimatedElements[screenCls];
   for (var i = 0; i < animatedElements.length; i++) {
      var $element = $(animatedElements[i]);
      $element.removeClass('animated');
      $element.removeAttr('style');
   }
}




$(function(){
  
  for (k in screenAnimateElements ) {
    setScreenAnimationInit(k);
  }

  setScreenAnimatedInit('.main-swiper',changeParamArr[0]);
   $('.main-swiper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      var $tip =  $(this).find('.tip');
      $tip.css('visibility','visible');
   });
  
  $(window).on('scroll',function(){
    var top = $(this).scrollTop();
    document.title = top;

    if (top > 600 ) {
          playScreenAnimationAction('.main-ourServe-title');
          setScreenAnimatedInit('.main-ourServe-content',changeParamArr[1]);
          $('.main-ourServe-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
             $(this).find('.serveContent').each(function(index,item){
               $(item).css('visibility','visible');
             });
          });
    }

    if (top > 1200) {
      playScreenAnimationAction('.main-aboutOur');
    } 

    if (top > 1650) {
      playScreenAnimationAction('.main-case-title');
      setScreenAnimatedInit('.main-case-desc', changeParamArr[2]);
      $('.main-case-desc').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        var $caseDesc =  $(this).find('.caseDesc');
        $caseDesc.css('visibility','visible');
      });
      setScreenAnimatedInit('.main-case-content',changeParamArr[3]);
      $('.main-case-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
             $(this).find('.cases_item').each(function(index,item){
               $(item).css('visibility','visible');
             });
      });
      setScreenAnimatedInit('.case-more',changeParamArr[4]);
       $('.case-more').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        var $viewMore =  $(this).find('.viewMore');
        $viewMore.css('visibility','visible');
      });
    }

    if (top > 2400) {
      playScreenAnimationAction('.main-introduce');
      setScreenAnimatedInit('.main-introduce-main',changeParamArr[5]);
      $('.main-introduce-main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        var $introContent =  $(this).find('.introduce-content');
        $introContent.css('visibility','visible');
      });
    }

    if (top > 2900) {
      playScreenAnimationAction('.main-gift-title');
      playScreenAnimationAction('.main-gift-desc');
      setScreenAnimatedInit('.main-gift-content',changeParamArr[8]);
      $('.main-gift-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        var $ProList =  $(this).find('.pro-list');
        $ProList.css('visibility','visible');
      });
    }

    if (top > 3400) {
      setScreenAnimatedInit('.main-slogan',changeParamArr[7]);
      $('.main-slogan').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        var $firstSentence =  $(this).find('.first-sentence');
        $firstSentence.css('visibility','visible');
        var $secondSentence =  $(this).find('.second-sentence');
        $secondSentence.css('visibility','visible');
      });
    }

    if (top > 3700) {
      playScreenAnimationAction('.main-news-title');
      playScreenAnimationAction('.main-news-desc');
      setScreenAnimatedInit('.main-news-content',changeParamArr[6]);
       $('.main-news-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).find('.news_item').each(function(index,item){
            $(item).css('visibility','visible');
          });
      });
    }
  });
})
