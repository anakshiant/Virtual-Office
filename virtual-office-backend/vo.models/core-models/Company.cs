using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
        public List<Owner> Admins { get; set; }
        public bool IsVerified { get; set; }
        public DateTime AddedOn { get; set; }
        public DateTime VerifiedOn { get; set; }
    }

    public class CompanyVerification
    {
        [Key]
        public int CompanyVerificationId { get; set; }
        [ForeignKey("CompanyId")]
        public int CompanyId { get; set; }
        public Guid CompanyVerificationCode { get; set; }
        public DateTime GenratedOn { get; set; }
    }
     
}
