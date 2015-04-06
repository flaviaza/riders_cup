var transformSupported = function () {
  var prefixes = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']
  var div      = document.createElement('div')

  for (var i = 0; i < prefixes.length; i++)
    if (div && div.style[prefixes[i]] !== undefined) return true

  return false
}

jQuery(function ($) {
  var animate = true

  $.stellar({
    positionProperty: transformSupported() ? 'transform' : 'position'
  })

  $('[data-footer]').on('mouseenter', function () {
    if (animate) {
      $('html, body').animate({ scrollTop: $(document).height() }, 1000, function () {
        animate = false
      })
    }
  })

  $(document).on('affixed-top.bs.affix', '[data-footer]', function () {
    animate = true
  })

  // SMOOTH SCROLLING
  // copied from https://css-tricks.com/snippets/jquery/smooth-scrolling/

  $('a[data-smooth][href*="#"]').click(function () {
    var self     = this
    var target   = $(self.hash)
    var samePath = location.pathname.replace(/^\//, '') === self.pathname.replace(/^\//, '')
    var sameHost = location.hostname === self.hostname

    if (samePath && sameHost && target.length) {
      var options = {
        scrollTop: target.offset().top - $('.navbar-fixed-top').outerHeight()
      }

      $('html, body').animate(options, 1000, function () {
        location.hash = self.hash
      })

      return false
    }
  })

  //carousel from boostrap
  $('.carousel').carousel()
})
