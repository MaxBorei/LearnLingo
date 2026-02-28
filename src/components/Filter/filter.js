export const Filter = () => {
  return `
<div class='filter'>
    <form action="filter_list_teachers" class="filter__list">
        <div class="filter__list__text">
            <label for="language" class="filter__list__label visually-hidden">Languages</label>
            <select id="language" class="filter__list__select" name="Languages">
                <option value="French">French</option>
                <option value="English">English</option>
                <option value="German">German</option>
                <option value="Spanish">Spanish</option>
                <option value="Italian">Italian</option>
                <option value="Mandarin Chinese">Mandarin Chinese</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Korean">Korean</option>
            </select>

            <div class="custom-select">
                <label for="language" class="filter__list__label_custom ">Languages</label>
                <div class="custom-select_trigger">English
                <button type="button" class="custom-select_trigger_btn">
                <svg class="custom-select_trigger_svg">
                <use href='/sprite.svg#icon-arrow-down'></use>
                </svg>
                </button>
                </div>
                    <ul class="custom-select_options"></ul>
                </div>
        </div>
        <div class="filter__list__text">
            <label for="Level" class="filter__list__label visually-hidden">Level of knowledge</label>
            <select id="Level" name="Level" class="filter__list__select">
                <option value="A1 Beginner">A1 Beginner</option>
                <option value="A2 Elementary">A2 Elementary</option>
                <option value="B1 Intermediate">B1 Intermediate</option>
                <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
            </select>

            <div class="custom-select">
                <label for="Level" class="filter__list__label_custom">Level of knowledge</label>
                <div class="custom-select_trigger">A1 Beginner
                <button type="button" class="custom-select_trigger_btn">
                <svg class="custom-select_trigger_svg">
                <use href='/sprite.svg#icon-arrow-down'></use>
                </svg>
                </button>
                </div>
                    <ul class="custom-select_options"></ul>
                </div>
        </div>
        <div class="filter__list__text">
            <label for="Price" class="filter__list__label visually-hidden">Price</label>
            <select id="Price" name="Price" class="filter__list__select">
                <option value="25">25 $</option>
                <option value="27">27 $</option>
                <option value="28">28 $</option>
                <option value="30">30 $</option>
                <option value="32">32 $</option>
                <option value="35">35 $</option>
            </select>

            <div class="custom-select">
                <label for="Price" class="filter__list__label_custom">Price</label>
                <div class="custom-select_trigger">25 $
                <button type="button" class="custom-select_trigger_btn">
                <svg class="custom-select_trigger_svg">
                <use href='/sprite.svg#icon-arrow-down'></use>
                </svg>
                </button>
                </div>
                    <ul class="custom-select_options"></ul>
                </div>
        </div>
    </form>
</div>
`;
};
