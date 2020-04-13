using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace vo.models.core_models
{
    public class User 
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        [ForeignKey("BayId")]
        public int BayId { get; set; }
        public string Password { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsVerified { get; set; }
        public bool IsActiveUser { get; set; }

    }

    public class UserVerification
    {
        public int UserVerificationId { get; set; }
        public int UserId { get; set; }
        public Guid UserVerificationCode { get; set; }
        public DateTime GeneratedOn { get; set; }
    }

    public static class Role
    {
        public const string Admin = "Admin";
        public const string User = "User";
        public const string CompanyOwner = "Owner";
    }
}
