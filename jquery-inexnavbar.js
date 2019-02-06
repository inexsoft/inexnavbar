/*******************************************************************************
 * Copyright 2019 Venura Sasanka Abeysinghe Abeysinghe Achchige Don @ Inexsoft
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

(function ( $ ) {

$.fn.displayInexNavBar = function(options){
    
    let settings = $.extend({
    'navWidth': 100,
    'upIconClass': 'fa fa-angle-double-up',
    'downIconClass': 'fa fa-angle-double-down'
 },options);
  
    //handles the initial set up of the navbar
    const mainItemCount = $('.inexnavbar>nav>ul>li').length;
    const mainMenuItems = $('.inexnavbar>nav>ul>li');
    const icon = $('.nav-icon i');
    const navPanel = $('.inexnavbar>nav>ul');
 
    $(mainMenuItems).css({ 'flex': `0 0 ${Math.round(settings.navWidth / mainItemCount)}%`, 'text-align': 'center' });
 
    $('.inexnavbar li').each(function () {
 
       if ($(this).has('ul')) {
          $(this).children('ul').before(`<span class="sub-pointer"><i class="${settings.downIconClass}"></i></span>`);
       }
    });
 
    //Expand the sub menu on hover
 
    $('.inexnavbar li').hover(function () {
 
       //changes the arrow icon font
       if ($(this).has('ul')) {
          if ($(this).has('.sub-pointer').has('i')) {
             $(this).children('.sub-pointer').children('i').removeClass(settings.downIconClass);
             $(this).children('.sub-pointer').children('i').addClass(settings.upIconClass);
 
          }
 
          $(this).children('ul').css({
             'display': 'flex',
             'flex-direction': 'column',
 
          });
       }
 
    }, function () {
       if ($(this).has('ul')) {
 
          if ($(this).has('.sub-pointer').has('i')) {
             $(this).children('.sub-pointer').children('i').removeClass(settings.upIconClass);
             $(this).children('.sub-pointer').children('i').addClass(settings.downIconClass);
 
          }
 
          $(this).children('ul').css({
             'display': 'none',
          });
       }
    }
    );
 
    $(window).resize(() => {
       if ($(window).width() > 980) {
          navPanel.removeClass('mobile-nav-close', 'mobile-nav-open');
       } else {
          menuToggle(icon);
       }
    });
 
    const menuToggle = (icon) => {
       if (icon.text() == 'view_headline') {
          $('.main-menu').removeClass('mobile-nav-open').addClass('mobile-nav-close');
       } else {
          $('.main-menu').removeClass('mobile-nav-close').addClass('mobile-nav-open');
       }
    };
 
 
    $('.nav-icon').click((event) => {
 
       if (icon.text() == 'view_headline') {
          icon.text('clear');
          icon.css('color', '#fff');
          menuToggle(icon);
       } else {
          icon.text('view_headline');
          icon.css('color', 'red');
          menuToggle(icon);
       }
    });
 
 
    $('.inexnavbar li').click(function (event) {
 
       //important to prevent calling this method several times due to nested li 
       event.stopPropagation();
 
       menuColorReset();
 
       let element = $(this).parent();
 
       while (element.length != 0) {
          if ($(element).is('li')) {
             $(element).addClass('current');
          }
          element = $(element).parent();
       }
       $(this).addClass('current');
 
 
    });
 
 
    const menuColorReset = function () {
 
       /* removes the current class and adds the current class */
       $('.inexnavbar li').each((index, obj) => {
          if ($(obj).hasClass('current')) {
             $(obj).removeClass('current');
          }
 
       });
 
    }


    return this;
 
 }
 }( jQuery ));
 