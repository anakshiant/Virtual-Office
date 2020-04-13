using System;
using System.Collections.Generic;
using System.Text;

namespace vo.models.api_models
{
    public class UserUpdateModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int BayId { get; set; }
        public string Role { get; set; }
    }
}
