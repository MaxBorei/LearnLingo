export const initCustomSelect = () => {
  const select = document.querySelectorAll('.filter__list__select');

  const arrSelect = [...select];

  const selectFather = arrSelect.map(i => i.closest('.filter__list__text'));

  const btnSelect = selectFather.map(item =>
    item.querySelector('.custom-select_trigger_btn')
  );
  const option = arrSelect[0].options;
  const firstElTxt = option[0].text;
  const firstElVal = option[0].value;
  console.log(firstElTxt);

  const optionLength = option.length;
  const arrOptions = [];
  for (let i = 0; i < option.length; i++) {
    arrOptions.push(option[i].text);
  }
  const arrValue = [];
  for (let i = 0; i < option.length; i++) {
    arrValue.push(option[i].value);
  }

  const ulRender = selectFather.map(item =>
    item.querySelector('.custom-select_options')
  );
  ulRender.forEach(element => {
    element.innerHTML = '';
  });

  for (let i = 0; i < arrSelect.length; i++) {
    for (let j = 0; j < arrSelect[i].options.length; j++) {
      ulRender[i].insertAdjacentHTML(
        'beforeend',
        `<li class="custom_options" data-value="${arrSelect[i].options[j].value}">${arrSelect[i].options[j].text}</li>`
      );
    }
  }

  btnSelect.forEach(btn => {
    btn.addEventListener('click', e => {
      const fatherBox = e.currentTarget.closest('.custom-select');
      if (!fatherBox) return;
      const ulAdd = fatherBox.querySelector('.custom-select_options');
      const allSelects = document.querySelectorAll('.custom-select_options');
      if (!ulAdd.classList.contains('is-open')) {
        allSelects.forEach(e => e.classList.remove('is-open'));
        ulAdd.classList.add('is-open');
        return;
      }
      ulAdd.classList.remove('is-open');
      return;
    });
  });

  document.addEventListener('click', clickEvent => {
    const optionEl = clickEvent.target.closest('.custom_options');

    if (optionEl) {
      const text = optionEl.textContent.trim();

      const fatherBox = optionEl.closest('.custom-select');
      const triggerValue = fatherBox.querySelector('.custom-select_value');
      triggerValue.textContent = text;

      const value = optionEl.dataset.value;

      const fatherSelect = optionEl.closest('.filter__list__text');
      if (!fatherSelect) return;

      const nativeSelect = fatherSelect.querySelector('.filter__list__select');
      nativeSelect.value = value;

      nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));

      fatherBox
        .querySelectorAll('.custom_options')
        .forEach(opt => opt.classList.remove('is-selected'));
      optionEl.classList.add('is-selected');

      optionEl.closest('.custom-select_options')?.classList.remove('is-open');
      return;
    }

    if (!clickEvent.target.closest('.custom-select')) {
      document
        .querySelectorAll('.custom-select_options')
        .forEach(ul => ul.classList.remove('is-open'));
    }
  });
};
