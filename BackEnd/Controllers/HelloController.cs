// <copyright file="HelloController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>
namespace MyApi.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]

    /// <summary>
    /// HelloController for managing greetings.
    /// </summary>
    public class HelloController : ControllerBase
    {
        /// <summary>
        /// Gets a greeting message.
        /// </summary>
        /// <returns>A greeting message.</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return this.Ok(new { message = "Hello from .NET API!" });
        }
    }
}