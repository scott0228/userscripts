// ==UserScript==
// @name         TrackingTokenStripper
// @version      1.0
// @description  Remove most of the annoying tracking token from URL parameters
// @license      MIT
// @homepage     https://scott0228.blogspot.com/
// @homepageURL  https://scott0228.blogspot.com/
// @website      https://scott0228.blogspot.com/
// @source       https://github.com/scott0228/userscripts
// @namespace
// @author       Scott Yang
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

// 參考：
// https://lukabratos.me/2020/05/08/removing-utm-parameters-with-apples-shortcuts/
// https://github.com/doggy8088/TrackingTokenStripper
(function() {
    const params = new URLSearchParams(location.search)
    const utm_params = [
        'liff.referrer',
        'fbclid',
        'utm_source',
        'utm_medium',
        'utm_term',
        'utm_campaign',
        'utm_content',
        'utm_cid',
        'utm_reader',
        'utm_referrer',
        'utm_name',
        'utm_social',
        'utm_social-type',
        'gclid',
        'igshid',
        '_hsenc',
        '_hsmi',
        'mc_cid',
        'mc_eid',
        'mkt_tok',
        'yclid',
        '_openstat',
        'wt.mc_id',
        '__tn__',
        'gclsrc',
        'itm_source',
        'itm_medium',
        'itm_campaign',
        'mc', // sendgrid.com
        'mcd', // sendgrid.com
        'cvosrc', // sendgrid.com
        'cr_cc', // https://blogs.microsoft.com/
        'sc_channel',
        'sc_campaign',
        'sc_geo',
        'trk',
        'sc_publisher',
        'trkCampaign',
        'sc_outcome',
        'sc_country',
        '__hstc',
        '__hssc',
        '__hsfp',
        '_gl'
    ]

    utm_params.forEach(item => {
      if (params.has(item) === true) {
        params.delete(item)
      }
    });

    var newUrl = `${location.origin}${location.pathname}`;
    if (Array.from(params).length > 0) {
        newUrl = `${newUrl}?${params}`
    }

    if (newUrl && location.href !== newUrl) {
        location.href = newUrl;
    }
})();
