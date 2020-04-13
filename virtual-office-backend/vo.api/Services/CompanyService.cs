using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vo.api.DataAccess;
using vo.api.Utilities;
using vo.models.core_models;

namespace vo.api.Services
{
    public interface ICompanyService
    {
        ServiceResponse<Company> RegisterCompany(Company company);
        ServiceResponse<Company> VerifyCompany(Guid guid);
        ServiceResponse<Company> UpdateCompany(Company company);
        ServiceResponse<Owner> AddOwner(Owner owner);
        
    }
    public class CompanyService : ICompanyService
    {
        private readonly ApiDataContext _context;
        private readonly ApiSettings _appSettings;
        private readonly IEmailService EmailSvc;
        public CompanyService(ApiDataContext context, IOptions<ApiSettings> appSettings, IEmailService emailService)
        {
            _context = context;
            _appSettings = appSettings.Value;
            EmailSvc = emailService;
        }

        public ServiceResponse<Owner> AddOwner(Owner owner)
        {
            ServiceResponse<Owner> response = new ServiceResponse<Owner>();

            try 
            {                
                _context.Owners.Add(owner);
                _context.SaveChanges();
                response.Data = _context.Owners.Where(x => x.EmailId == owner.EmailId).FirstOrDefault();
                response.Status = StatusType.Success;
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }
            return response;
        }

        public ServiceResponse<Company> RegisterCompany(Company company)
        {
            ServiceResponse<Company> response = new ServiceResponse<Company>();

            try
            {                
                if (_context.Companies.Where(x => x.Name == company.Name).Count() > 0)
                {
                    var exisitingCompany = _context.Companies.Where(x => x.Name == company.Name).FirstOrDefault();
                    response.ErrorMessage = $"This company already exist! Name : {exisitingCompany.Name} Contact : {exisitingCompany.EmailId}, {exisitingCompany.PhoneNumber}";
                }
                else
                {
                    _context.Companies.Add(company);
                    _context.SaveChanges();
                    response.Data = _context.Companies.Where(x => x.Name == company.Name).FirstOrDefault();
                    response.Status = StatusType.Success;
                    //EmailSvc.SendCompanyRegistrationEmail(company); for now!
                }
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }

            return response;
        }

        public ServiceResponse<Company> UpdateCompany(Company company)
        {
            ServiceResponse<Company> response = new ServiceResponse<Company>();

            try
            {
                if (company.CompanyId <= 0)
                {
                    response.ErrorMessage = "Need company Id to process.";
                }
                else 
                {
                    _context.Companies.Update(company);
                    _context.SaveChanges();
                    response.Data = _context.Companies.Where(x => x.Name == company.Name).FirstOrDefault();
                    response.Status = StatusType.Success;
                }               
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }

            return response;
        }

        public ServiceResponse<Company> VerifyCompany(Guid guid)
        {
            throw new NotImplementedException();
        }
    }
}
