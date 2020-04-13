using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using vo.api.Utilities;
using vo.models.core_models;

namespace vo.api.Services
{
    public interface IEmailService
    {
        bool SendUserRegistrationEmail(User user);
        bool SendCompanyRegistrationEmail(Company company);
    }
    public class EmailService : IEmailService
    {
        private readonly IOptions<MailerInfo> _mailerConfig;
        public EmailService(IOptions<MailerInfo> mailerConfig)
        {
            _mailerConfig = mailerConfig;
        }
        private bool SendMail(string body, string subject, string toEmailAddress)
        {
            var isMailSent = false;
            string FROM = _mailerConfig.Value.From;
            string TO = toEmailAddress;
            string SMTP_USERNAME = _mailerConfig.Value.SmtpUserName;
            string SMTP_PASSWORD = _mailerConfig.Value.SmtpPassword;
            string HOST = _mailerConfig.Value.Host;
            int PORT = 587;

            MailMessage message = new MailMessage
            {
                IsBodyHtml = true,
                From = new MailAddress(FROM),
#pragma warning disable CS0618 // Type or member is obsolete
                ReplyTo = new MailAddress(toEmailAddress)
#pragma warning restore CS0618 // Type or member is obsolete
            };

            message.To.Add(new MailAddress(TO.Trim(), ""));
            message.Subject = subject;
            message.Body = body;

            using (var client = new SmtpClient(HOST, PORT))
            {
                client.Credentials =
                    new NetworkCredential(SMTP_USERNAME, SMTP_PASSWORD);
                client.EnableSsl = true;
                try
                {
                    client.Send(message);
                    isMailSent = true;
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }

            if (isMailSent == true)
                return true;
            return false;
        }

        public bool SendUserRegistrationEmail(User user)
        {
            string body = "";

            return SendMail(body, "User registration success", user.EmailId);
        }

        public bool SendCompanyRegistrationEmail(Company company)
        {
            string body = "";

            return SendMail(body, "Company registration success", company.EmailId);
        }
    }
}
