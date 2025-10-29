
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


function calculateAndPrintFactorial() {

// Prompt the user for input and convert it to an integer

let userInput = prompt("Enter a non-negative integer to find its factorial:");

let num = parseInt(userInput);

// Validate the input

if (isNaN(num) || num < 0) {

console.log("Invalid input. Please enter a non-negative integer.");

return; // Exit the function if input is invalid

}

// Calculate the factorial

let factorialResult = 1;

if (num === 0 || num === 1) {

factorialResult = 1; // Factorial of and 1 is 1

} else {

for (let i = 2; i <= num; i++) {

factorialResult *= i;

}

}

// Print the result

console.log(The factorial of ${num} is: ${factorialResult}`);

}

// Call the function to execute it

calculateAndPrintFactorial();
