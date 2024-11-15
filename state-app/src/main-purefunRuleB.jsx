
//immpure function
// function updateProfile(profile, city) {
//     //biz logic to update city of the profile
//     profile.city = city
//     return profile
// }

// function updateProfile(profile, city) {
//     //immutable:using plain js pattern
//     //copy old object properties and what property value you want to update that has to be kept
//     return {
//         name: profile.name,
//         city: city
//     }

// }
// function updateProfile(profile, city) {
//     //immutable:using plain js pattern
//     //copy old object properties and what property value you want to update that has to be kept
//     return {
//         name: profile.name,
//        // city: city
//        city
//     }

// }
// function updateProfile(profile, city) {
//     //clone method, through which you can return immutable object
//     return Object.assign({}, profile, { city: city })

// }

function updateProfile(profile, city) {
    //using spread
    return { ...profile, city: city }
}

let profile = {
    name: 'Subramanian',
    city: 'Coimbatore'
}
console.log('before update', profile)
let result = updateProfile(profile, 'Delhi')
console.log(result === profile ? "same Object" : "Different Object")
console.log('after update', result)
