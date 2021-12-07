import './index.scss';


(() => {
    let exp = document.querySelector('#export'),
        imp = document.querySelector('#import');

        exp.addEventListener('change', (e) => exp.nextElementSibling.innerHTML = e.target.files[0].name)
        imp.addEventListener('change', (e) => imp.nextElementSibling.innerHTML = e.target.files[0].name)
    
    let select = document.querySelector('.select'),
        selectValue = document.querySelector('.select__value');

        select.addEventListener('click', ({ target }) => {
            if(select.classList.contains('select--open') & target.tagName === 'LI'){
                [selectValue.innerHTML, target.innerHTML] = [target.innerHTML, selectValue.innerHTML]
            }
            select.classList.toggle('select--open')
        });
        
})();
