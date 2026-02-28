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
  ulRender[0].innerHTML = '';

  //   for (let i = 0; i < option.length; i++) {
  //     ulRender[0].insertAdjacentHTML(
  //       'beforeend',
  //       `<li class="custom_options" value="${option[i].value}">${option[i].text}</li>`
  //     );
  //   }

  for (let i = 0; i < arrSelect.length; i++) {
    for (let j = 0; j < arrSelect[i].options.length; j++) {
      ulRender[i].insertAdjacentHTML(
        'beforeend',
        `<li class="custom_options" value="${arrSelect[i].options[j].value}">${arrSelect[i].options[j].text}</li>`
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
};

// const closeSelect = document
//         .querySelectorAll('.custom-select_options')
//         .map(e => e.classList.contains('is-open').classList.remove('is-open'));
//     });
// const selectOpen = [...allSelects].map(e => e.classList.remove('is-open'));
