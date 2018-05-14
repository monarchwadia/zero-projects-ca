
// Validate Contact Form
$("#ContactForm").validate({
    rules: {
        f_name: {
            required: true,
            minlength: 3
        },
        l_name: {
            required: true,
            minlength: 3
        },        
        email: {
            required: true,
            minlength: 4
        },
        message: {
            required: true
        }
    },
    messages: {
        f_name: {
            required: "Please enter first name",
            minlength: "Name must consist of at least 3 characters"
        },
        l_name: {
            required: "Please enter last name",
            minlength: "Name must consist of at least 3 characters"
        },        
        email: {
            required: "Please enter email address",
            minlength: "Email must be at least 4 characters long"
        },
        message: {
            required: "Please enter message"
        }
    },

    submitHandler: function(form) {
        //Send Booking Mail AJAX
        var formdata = jQuery("#ContactForm").serialize();
        jQuery.ajax({
            type:"POST",
            url:"contact_form/contact.php",
            data:formdata,
            dataType:'json',
            async: false,
            success:function(data){
                if(data.success){
                    alert('Thank You, Your Message Has been Sent');
                }else{
                    alert('Error on Sending Message, Please Try Again');
                }

            },
            error:function(error){
                alert('Something Went Wrong');
            }

        });
    }
});

