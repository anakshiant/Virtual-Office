using System;
using System.Collections.Generic;
using System.Text;

namespace vo.models.core_models
{
    public class ServiceResponse<T> : ServiceResponse
    {
        T Data { get; set; }
    }

    public class ServiceResponse
    {
        public StatusType Status { get; set; }
        public string ErrorMessage { get; set; }
    }

    public enum StatusType
    {
        Failure,
        Success
    }
}
