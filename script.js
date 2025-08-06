
    <script>
      ;(function () {
        var getPrefersDark = function () {
          return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        const getLocalDark = () => {
          try {
            return JSON.parse(localStorage.getItem('prefersDark'))
          } catch (e) {
            return null
          }
        }

        var prefersDark = getLocalDark() ?? getPrefersDark()

        if (prefersDark === 'dark' || (prefersDark === 'auto' && getPrefersDark())) {
          console.log('Setting dark theme', prefersDark)
          document.documentElement.style.backgroundColor = '#111113'
          document.body.classList.add('dark')
        } else {
          console.log('Setting light theme', prefersDark)
          document.documentElement.style.backgroundColor = '#f9f9fb'
          document.body.classList.remove('dark')
        }
      })()
    </script>

    <div id="genericPortalContainer" style="z-index: 100"></div>
    <div id="app"></div>
    <div id="menuOverlayPortal"></div>

    <script>
      ;(function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            ;(h.hj.q = h.hj.q || []).push(arguments)
          }
        h._hjSettings = { hjid: 3339867, hjsv: 6 }
        a = o.getElementsByTagName('head')[0]
        r = o.createElement('script')
        r.async = 1
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
    </script>
