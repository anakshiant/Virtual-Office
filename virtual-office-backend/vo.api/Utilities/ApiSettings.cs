using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vo.api.Utilities
{
    //a pocc for retrieving the api settings from appsettings.json!
    public class ApiSettings
    {
        public string Secret { get; set; }
    }

    public class MailerInfo
    {
        public string From { get; set; }
        public string SmtpUserName { get; set; }
        public string SmtpPassword { get; set; }
        public string Host { get; set; }
    }
}
