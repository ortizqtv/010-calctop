// calc

// create content interface

function cContainer() {
  const container = document.querySelector('.container');
  const calculator = document.createElement('div');
  const information = document.createElement('div');
  calculator.className = 'container__calculator';
  information.className = 'container__information';
  container.appendChild(calculator);
  container.appendChild(information);
}

function cCalculator() {
  const calculator = document.querySelector('.container__calculator');
  const bar = document.createElement('div');
  const container = document.createElement('div');
  bar.className = 'container__calculator__bar';
  container.className = 'container__calculator__display';
  calculator.appendChild(bar);
  calculator.appendChild(container);
}

function cCalculatorTopBar() {
  const bar = document.querySelector('.container__calculator__bar');
  const title = document.createElement('h1');
  title.className = 'container__calculator__bar__title';
  title.textContent = 'Calculator';
  bar.appendChild(title);
  for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.className = 'container__calculator__bar__button';
    bar.appendChild(button);
  }
}

function cMaxMinClose() {
  const bar = document.querySelector('.container__calculator__bar');
  let buttons = bar.children;
  buttons[1].classList.add('container__calculator__bar__button__min');
  buttons[2].classList.add('container__calculator__bar__button__max');
  buttons[3].classList.add('container__calculator__bar__button__close');
}

function cCalculatorContainer() {
  const container = document.querySelector('.container__calculator__display');
  const display = document.createElement('div');
  const history = document.createElement('div');
  display.className = 'container__calculator__display__calculator';
  history.className = 'container__calculator__display__history';
  container.appendChild(display);
  container.appendChild(history);
}

function cCalculatorDisplay() {
  const display = document.querySelector(
    '.container__calculator__display__calculator'
  );
  const screen = document.createElement('div');
  const keypad = document.createElement('div');
  screen.className = 'container__calculator__display__calculator__screen';
  keypad.className = 'container__calculator__display__calculator__keypad';
  display.appendChild(screen);
  display.appendChild(keypad);
}

function cScreen() {
  const screen = document.querySelector(
    '.container__calculator__display__calculator__screen'
  );
  const secondaryScreen = document.createElement('p');
  const mainScreen = document.createElement('h1');
  secondaryScreen.className =
    'container__calculator__display__calculator__screen__secondary';
  mainScreen.className =
    'container__calculator__display__calculator__screen__main';
  mainScreen.textContent = '0';
  screen.appendChild(secondaryScreen);
  screen.appendChild(mainScreen);
}

function cKeypad() {
  const keypad = document.querySelector(
    '.container__calculator__display__calculator__keypad'
  );
  for (let i = 0; i < 24; i++) {
    const button = document.createElement('button');
    button.className =
      'container__calculator__display__calculator__keypad__button';
    keypad.appendChild(button);
  }
}

function cKeys() {
  const keypad = document.querySelector(
    '.container__calculator__display__calculator__keypad'
  );
  let buttons = keypad.children;
  buttons[0].classList.add(
    'container__calculator__display__calculator__keypad__percentage'
  );
  buttons[0].textContent = '%';
  buttons[0].value = 'percentage';
  buttons[1].classList.add(
    'container__calculator__display__calculator__keypad__ce'
  );
  buttons[1].textContent = 'ce';
  buttons[2].classList.add(
    'container__calculator__display__calculator__keypad__c'
  );
  buttons[2].textContent = 'c';
  buttons[3].classList.add(
    'container__calculator__display__calculator__keypad__backspace'
  );
  buttons[3].textContent = '⤺';
  buttons[4].classList.add(
    'container__calculator__display__calculator__keypad__xoperator'
  );
  buttons[4].textContent = '¹ / x';
  buttons[4].value = 'fraction';
  buttons[5].classList.add(
    'container__calculator__display__calculator__keypad__xoperator'
  );
  buttons[5].textContent = 'x ²';
  buttons[5].value = 'square';
  buttons[6].classList.add(
    'container__calculator__display__calculator__keypad__xoperator'
  );
  buttons[6].textContent = '² √ x';
  buttons[6].value = 'root';
  buttons[7].classList.add(
    'container__calculator__display__calculator__keypad__operator'
  );
  buttons[7].textContent = '÷';
  buttons[7].value = 'divide';
  buttons[8].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[8].textContent = '7';
  buttons[9].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[9].textContent = '8';
  buttons[10].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[10].textContent = '9';
  buttons[11].classList.add(
    'container__calculator__display__calculator__keypad__operator'
  );
  buttons[11].textContent = '×';
  buttons[11].value = 'multiply';
  buttons[12].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[12].textContent = '4';
  buttons[13].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[13].textContent = '5';
  buttons[14].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[14].textContent = '6';
  buttons[15].classList.add(
    'container__calculator__display__calculator__keypad__operator'
  );
  buttons[15].textContent = '−';
  buttons[15].value = 'subtract';
  buttons[16].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[16].textContent = '1';
  buttons[17].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[17].textContent = '2';
  buttons[18].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[18].textContent = '3';
  buttons[19].classList.add(
    'container__calculator__display__calculator__keypad__operator'
  );
  buttons[19].textContent = '+';
  buttons[19].value = 'add';
  buttons[20].classList.add(
    'container__calculator__display__calculator__keypad__negative'
  );
  buttons[20].textContent = '⁺ / -';
  buttons[21].classList.add(
    'container__calculator__display__calculator__keypad__operand'
  );
  buttons[21].textContent = '0';
  buttons[22].classList.add(
    'container__calculator__display__calculator__keypad__decimal'
  );
  buttons[22].textContent = '.';
  buttons[23].classList.add(
    'container__calculator__display__calculator__keypad__equal'
  );
  buttons[23].textContent = '=';
}

function cProductInformation() {
  const information = document.querySelector('.container__information');
  const title = document.createElement('h1');
  const description = document.createElement('p');
  const button = document.createElement('button');
  const tags = document.createElement('a');
  title.className = 'container__information__title';
  title.textContent = 'Project C';
  description.className = 'container__information__description';
  description.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ipsam aperiam temporibus reiciendis. Nihil dolorum natus, velit ducimus fuga quibusdam eum explicabo inventore aut, veritatis quam, illum atque maiores? Repellat!';
  button.className = 'container__information__button';
  button.textContent = 'Download for Windows';
  tags.className = 'container__information__tags';
  information.appendChild(title);
  information.appendChild(description);
  information.appendChild(button);
  information.appendChild(tags);
}

function cTags() {
  const tags = document.querySelector('.container__information__tags');
  const github = document.createElement('img');
  const gitlogo = document.createElement('img');
  tags.href = 'https://github.com/oavqt';
  tags.target = '_blank';
  github.src = 'images/github.png';
  gitlogo.src = 'images/gitlogo.png';
  github.className = 'container__information__tags__github';
  gitlogo.className = 'container__information__tags__gitlogo';
  tags.appendChild(github);
  tags.appendChild(gitlogo);
  tags.insertAdjacentHTML('beforeend', 'Oav');
}

cContainer();
cCalculator();
cProductInformation();
cTags();
cCalculatorTopBar();
cMaxMinClose();
cCalculatorContainer();
cCalculatorDisplay();
cScreen();
cKeypad();
cKeys();

//
