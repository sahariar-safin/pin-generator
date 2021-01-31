// const randomNumber = (Math.random() * 10000 + '').split('.')[0];
            // document.getElementById('genaret-pin').value = randomNumber;
            function genaretPin() {
                const randomNumber = (Math.random() * 10000 + '').split('.')[0];
                document.getElementById('genaret-pin').value = randomNumber;
                displayElement();
            }
            function numberInput(number) {
                const numberInput = document.getElementById('input-pin');
                const currentNumber = numberInput.value + number + '';
                numberInput.value = currentNumber;
            }
            function clean() {
                document.getElementById('input-pin').value = '';
                displayElement();
            }
            function submit() {
                displayElement();
                const numberInput = document.getElementById('input-pin').value;
                const genaretPin = document.getElementById('genaret-pin').value;
                const countTry = document.getElementById('count-try');
                const countAmount = parseInt(countTry.innerText);
                if (numberInput == genaretPin) {
                    document.getElementById('right-pin').style.display = 'block';
                    countTry.innerText = 3;
                }
                if (numberInput != genaretPin && countAmount > 0) {
                    document.getElementById('try-again').style.display = 'block';
                    countTry.innerText = countAmount - 1;
                }
            }
            function displayElement() {
                document.getElementById('right-pin').style.display = 'none';
                document.getElementById('try-again').style.display = 'none';
            }