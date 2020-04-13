using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vo.api.Services;
using vo.models.api_models;
using vo.models.core_models;

namespace vo.api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class CompaniesController : ControllerBase
    {
        private readonly ICompanyService _companySvc;
        private IMapper _mapper;

        public CompaniesController(ICompanyService companyService, IMapper mapper)
        {
            _companySvc = companyService;
            _mapper = mapper;
        }
        // GET: api/Companies
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Companies/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        [AllowAnonymous]
        // POST: api/Companies
        [HttpPost("Register")]
        public IActionResult Register([FromBody] CompanyRegistrationModel model)
        {
            Company registerdCompany = null;
            string errorMessage = string.Empty;
            Company company = new Company()
            {
                AddedOn = DateTime.Now,
                Address = model.Address,
                PhoneNumber = model.PhoneNumber,
                EmailId = model.EmailId,
                Name = model.Name
            };

            var svcRegisterResponse = _companySvc.RegisterCompany(company);
            if (svcRegisterResponse.Status == StatusType.Success)
            {
                registerdCompany = svcRegisterResponse.Data;
                Owner owner = new Owner()
                {
                    CompanyId = svcRegisterResponse.Data.CompanyId,
                    EmailId = model.OwnerEmailId,
                    FirstName = model.OwnerFirstName,
                    LastName = model.OwnerLastName,
                    PhoneNumber = model.OwnerPhoneNumber
                };
                var svcAddOwnerResponse = _companySvc.AddOwner(owner);

                if (svcAddOwnerResponse.Status == StatusType.Failure)
                {
                    errorMessage = svcAddOwnerResponse.ErrorMessage;
                }                
            }
            else
            {
                errorMessage = svcRegisterResponse.ErrorMessage;
            }

            if (string.IsNullOrEmpty(errorMessage))
            {
                return Ok(new { ErrorMessage = string.Empty, registerdCompany});
            }
            else
            {
                return Ok(new { ErrorMessage = errorMessage });
            }
        }

        // PUT: api/Companies/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] CompanyUpdateModel model)
        {
            Company company = _mapper.Map<Company>(model);
            company.CompanyId = id;
            string errorMessage = string.Empty;

            var svcResponse = _companySvc.UpdateCompany(company);
            if (svcResponse.Status == StatusType.Failure)
                errorMessage = svcResponse.ErrorMessage;

            return Ok(new { ErrorMessage = errorMessage });
            
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
