const validation = (formData) => {
    let errors = {}

    if(!formData.name) errors.name = 'Name must have something'
    if(!isNaN(formData.name)) errors.name = 'Name must be a string'

    if(!formData.HP) errors.HP = 'Pokemon must have health stat'
    if(isNaN(formData.HP)) errors.HP = 'Healh should be a number'

    if(!formData.armor || formData.armor === 0) errors.armor = 'Your Pokemon should have some defences'
    if(isNaN(formData.armor)) errors.armor = 'Armor should be a number'

    if(!formData.attack) errors.attack = 'Your Pokemon should make some damage'
    if(isNaN(formData.attack)) errors.attack = 'Attack should be a number'

    if(isNaN(formData.height)) errors.height = 'Height should be a number'
    if(isNaN(formData.weight)) errors.weight = 'Weight should be a number'
    if(isNaN(formData.speed)) errors.speed = 'Speed should be a number'

    if(!formData.image) errors.image = 'People should know how your pokemon will look like'
    if(!isNaN(formData.image)) errors.image = 'Image should be an URL'

    if(!formData.types) errors.types

    return errors
}

export default validation