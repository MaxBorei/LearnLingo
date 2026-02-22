export const Filter = () => {
  return `
    <div class='filter'>
        <form action="filter_list_teachers" class="filter__list">
        <p class="filter__list__text">
            <label class="filter__list__label">Languages</label>
            <select class="filter__list__select" name="Languages">
                <option value="French">French</option>
                <option value="English">English</option>
                <option value="German">German</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Polish">Polish</option>
            </select>
        </p>
        <p class="filter__list__text"> 
            <label class="filter__list__label">Level of knowledge</label>
            <select name="Level" class="filter__list__select">
                <option value="A1 Beginner">A1 Beginner</option>
                <option value="A2 Elementary">A2 Elementary</option>
                <option value="B1 Intermediate">B1 Intermediate</option>
                <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
            </select>
        </p>
        <p class="filter__list__text" >
            <label class="filter__list__label">Price</label>
            <select name="Price" class="filter__list__select">
                <option value="10">10 $</option>
                <option value="20">20 $</option>
                <option value="30">30 $</option>
                <option value="40">40 $</option>
            </select>
        </p>
        </form>
    </div>
    `;
};
