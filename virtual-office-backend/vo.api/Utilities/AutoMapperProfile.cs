using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vo.models.api_models;
using vo.models.core_models;

namespace vo.api.Utilities
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserRegistrationModel, User>();
            CreateMap<UserUpdateModel, User>();
            CreateMap<CompanyUpdateModel, Company>();
        }
    }
}
