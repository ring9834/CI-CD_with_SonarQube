using Microsoft.AspNetCore.Mvc;
using MyApi.Controllers;
using Xunit;

namespace MyApi.Tests
{
    public class HelloControllerTests
    {
        [Fact]
        public void Get_ReturnsOkWithMessage()
        {
            var controller = new HelloController();
            var result = controller.Get() as OkObjectResult;
            Assert.NotNull(result);
            Assert.Equal("Hello from .NET API!", (result.Value as dynamic).message);
        }
    }
}