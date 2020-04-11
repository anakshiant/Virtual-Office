using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace vo.models.core_models
{
    //we will keep minimum details as of now
    public class Company
    {
        [Key]
        public int CompanyId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        public List<Department> Departments { get; set; }
        public User Admin { get; set; }
    }
     
}
