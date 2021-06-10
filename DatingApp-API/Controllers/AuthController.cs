using System;
using System.Text;
using System.Security.Claims;
using System.Threading.Tasks;
using DatingApp_API.Data;
using DatingApp_API.Dtos;
using DatingApp_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;

namespace DatingApp_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _iconfiguraton;
        public AuthController(IAuthRepository authRepository, IConfiguration iconfiguraton)
        {
            _authRepository = authRepository;
            _iconfiguraton = iconfiguraton;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] UserForRegisterDto userForRegisterDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            if (await _authRepository.UserExist(userForRegisterDto.Username))
            {
                return BadRequest("Username alrealy exists");
            }

            var userToCreate = new User
            {
                UserName = userForRegisterDto.Username
            };
            var careateUser = await _authRepository.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserForRegisterDto userForRegisterDto)
        {
            var userForRepo = await _authRepository.Login(userForRegisterDto.Username.ToLower(), userForRegisterDto.Password);

            if (userForRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,userForRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userForRepo.UserName),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                    .GetBytes(_iconfiguraton.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}
