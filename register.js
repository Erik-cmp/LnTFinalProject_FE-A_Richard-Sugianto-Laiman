import { app, database } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

$(function(){
    var $registerForm = $("#reg-form");
    $.validator.addMethod("noSpace", function(value, element){
        return value === '' || value.trim().length != 0
    }, "Please enter a valid username!");
    jQuery.validator.addMethod("startswith", function(value, element) {
        return this.optional(element) || /^08/.test(value);
      }, "Phone number must starts with '08'!");
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                name:{
                    required: true,
                    noSpace: true,
                    minlength: 3
                },
                email:{
                    required: true,
                    email: true,
                },
                phone:{
                    required: true,
                    digits: true,
                    startswith: true,
                    maxlength: 14
                },
                event: {
                    required: true,
                },
            },
            messages:{
                name:{
                    required: 'Username is required!'
                },
                email:{
                    required: 'Email is required!',
                    email: 'Please enter a valid email address!'
                },
                phone:{
                    required: 'Phone Number is required!',
                    digits: 'Please enter a valid phone number!'
                },
                event:{
                    required: 'Please select an option!'
                },
            }
        })
    }
})

$('#submit-btn').click(function(){
    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let event = $('#event').val();

    const collectionRef = collection(database, 'users');

    addDoc(collectionRef, {
        name: name,
        email: email,
        phone: phone,
        event: event
    })
    .then(() => {
        alert("Data added")
    })
    .catch(err => {
        alert(err.message);
    })

    // $.post("https://jsonplaceholder.typicode.com/posts",{
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     event: event
    // });

})
