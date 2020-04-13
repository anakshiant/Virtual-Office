using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace vo.models.api_models
{
    public class CompanyUpdateModel 
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string EmailId { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
    }
}
