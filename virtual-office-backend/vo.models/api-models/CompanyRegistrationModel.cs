using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace vo.models.api_models
{
    public class CompanyRegistrationModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string EmailId { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string OwnerFirstName { get; set; }
        [Required]
        public string OwnerLastName { get; set; }
        [Required]
        public string OwnerEmailId { get; set; }
        [Required]
        public string OwnerPhoneNumber { get; set; }

    }
}
