(()=>{
        "use strict";
        var e, t, s, n, r = {
            9279: (e,t,s)=>{
                s.d(t, {
                    Z: ()=>n
                });
                const n = ()=>{
                    const e = document.querySelectorAll("source, .lazy");
                    var t = new IntersectionObserver((function(e, s) {
                            e.forEach((function(e) {
                                    if (e.isIntersecting) {
                                        var s = e.target;
                                        s.dataset && s.dataset.src && (s.src = s.dataset.src,
                                            s.classList.add("animate")),
                                        s.dataset && s.dataset.srcset && (s.srcset = s.dataset.srcset,
                                            s.classList.add("animate")),
                                            s.classList.remove("lazy"),
                                            t.unobserve(s)
                                    }
                                }
                            ))
                        }
                    ),{
                        rootMargin: "600px 0px 600px 0px"
                    });
                    e.forEach((function(e) {
                            t.observe(e)
                        }
                    ))
                }
            }
            ,
            2088: (e,t,s)=>{
                s.d(t, {
                    Z: ()=>n
                });
                const n = ()=>{
                    const e = document.querySelectorAll(".block.related-products, .block.related-bundles");
                    const t = new IntersectionObserver((e=>{
                            e.forEach((function(e) {
                                    if (e.isIntersecting) {
                                        const s = e.target
                                            , n = e.target.classList
                                            , r = n.contains("related-products") && window.drupalSettings.relatedProductsBlock
                                            , o = n.contains("related-bundles") && window.drupalSettings.relatedBundleBlock
                                            , c = e=>{
                                                window.dataLayer = window.dataLayer || [],
                                                    window.dataLayer.push({
                                                        event: "view_item_list",
                                                        ...e
                                                    }),
                                                    t.unobserve(s)
                                            }
                                        ;
                                        r && c(r),
                                        o && c(o)
                                    }
                                }
                            ))
                        }
                    ),{
                        threshold: .6
                    });
                    e.forEach((function(e) {
                            t.observe(e)
                        }
                    ))
                }
            }
            ,
            7651: (e,t,s)=>{
                s.d(t, {
                    Z: ()=>n
                });
                const n = ()=>{
                    const e = document.querySelectorAll(".layout--slider")
                        , t = new IntersectionObserver((function(e, s) {
                            e.forEach((function(e) {
                                    if (e.isIntersecting) {
                                        const s = e.target;
                                        document.body.classList.contains("swiperLoaded") || (document.body.classList.add("swiperLoaded"),
                                            (()=>{
                                                    let e = document.createElement("script");
                                                    e.src = "/themes/play/vendor/swiperjs/swiper-bundle.min.js",
                                                        e.async = !1,
                                                        e.defer = !0;
                                                    let t = document.createElement("script");
                                                    t.src = "/themes/play/dist/swiper-initial.min.js",
                                                        t.async = !1;
                                                    let s = document.createElement("script");
                                                    s.src = "/themes/play/dist/swiper-custom.min.js",
                                                        s.async = !1;
                                                    let n = document.createElement("link");
                                                    n.type = "text/css",
                                                        n.rel = "stylesheet",
                                                        n.href = "/themes/play/vendor/swiperjs/swiper-bundle.min.css",
                                                        n.media = "all";
                                                    let r = document.createElement("link");
                                                    r.type = "text/css",
                                                        r.rel = "stylesheet",
                                                        r.href = "/themes/play/dist/swiper-style.min.css",
                                                        r.media = "all",
                                                        document.body.appendChild(t),
                                                        document.body.appendChild(e),
                                                        document.body.appendChild(n),
                                                        document.body.appendChild(r),
                                                        window.setTimeout((function() {
                                                                document.body.appendChild(s)
                                                            }
                                                        ), 500)
                                                }
                                            )()),
                                            t.unobserve(s)
                                    }
                                }
                            ))
                        }
                    ),{
                        rootMargin: "650px 0px 650px 0px"
                    });
                    e.forEach((function(e) {
                            t.observe(e)
                        }
                    ))
                }
            }
            ,
            790: (e,t,s)=>{
                s.d(t, {
                    Z: ()=>n
                });
                const n = ()=>{
                    const e = document.querySelector(".video-block")
                        , t = new IntersectionObserver((function(e, s) {
                            e.forEach((function(e) {
                                    if (e.isIntersecting) {
                                        const s = e.target;
                                        let n = document.createElement("script");
                                        n.src = "//fast.wistia.com/assets/external/E-v1.js",
                                            n.defer = !0,
                                            document.body.appendChild(n),
                                            t.unobserve(s)
                                    }
                                }
                            ))
                        }
                    ),{
                        rootMargin: "0px 0px -300px 0px"
                    });
                    void 0 !== e && null != e && t.observe(e)
                }
            }
        }, o = {};
        function c(e) {
            var t = o[e];
            if (void 0 !== t)
                return t.exports;
            var s = o[e] = {
                exports: {}
            };
            return r[e](s, s.exports, c),
                s.exports
        }
        c.d = (e,t)=>{
            for (var s in t)
                c.o(t, s) && !c.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: t[s]
                })
        }
            ,
            c.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
            e = c(790),
            t = c(9279),
            s = c(7651),
            n = c(2088),
            document.addEventListener("DOMContentLoaded", (function() {
                    if ("IntersectionObserver"in window) {
                        document.getElementsByClassName("layout-builder-form").length || ((0,
                            t.Z)(),
                            (0,
                                s.Z)(),
                            (0,
                                e.Z)(),
                            (0,
                                n.Z)());
                        var r = new IntersectionObserver(o,{
                            root: null,
                            threshold: .6
                        });
                        function o(e, t) {
                            e.forEach((e=>e.target.classList.toggle("triggered", e.isIntersecting)))
                        }
                        document.querySelectorAll(".show-hide").forEach((e=>{
                                r.observe(e)
                            }
                        ))
                    }
                }
            ))
    }
)();
