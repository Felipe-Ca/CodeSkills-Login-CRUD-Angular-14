using Laboratory.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Laboratory.Controllers
{
  [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody] Login login)
        {

            if (login == null)
                return BadRequest("No exist");


            if (login.Username == "a" && login.Password == "a")
            {

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);


                var tokenOption = new JwtSecurityToken(
                    issuer: "http://localhost:7052",
                    audience: "http://localhost:7052",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signingCredentials
               );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOption);
                return Ok(new { Token = tokenString });

            }

            return Unauthorized();


        }




        //public IActionResult Login([FromBody] Login user)
        //{


        //    //if (user == null)
        //    //    return BadRequest("Invalid client request");

        //    //if (user.Username == user.Username && user.Password == user.Password)
        //    //{
        //    //    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
        //    //    var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);


        //    //    var tokenOption = new JwtSecurityToken(
        //    //        issuer: "http://localhost:7052",
        //    //        audience: "http://localhost:7052",
        //    //        claims: new List<Claim>(),
        //    //        expires: DateTime.Now.AddMinutes(5),
        //    //        signingCredentials: signingCredentials
        //    //   );

        //    //    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOption);
        //    //    return Ok(new { Token = tokenString });
        //    //}

        //    //return Unauthorized();
        //}
    }
}
