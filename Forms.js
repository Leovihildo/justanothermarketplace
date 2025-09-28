function toggleOtherField(select) {
    const otherField = document.getElementById("otherSkillField");
    if (select.value === "other") {
        otherField.classList.remove('hide');
    } else {
        otherField.classList.add('hide');
    }
}

const input = document.querySelector("#phone");
    window.intlTelInput(input, {
    loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.2/build/js/utils.js"),
});
