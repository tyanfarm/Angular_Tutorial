using BE.Contracts.Repositories;
using BE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class OrderdetailsController : ControllerBase {
    private readonly IOrderdetailsRepository _orderdetailsRepository;

    public OrderdetailsController(IOrderdetailsRepository orderdetailsRepository) {
        _orderdetailsRepository = orderdetailsRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllDetails() {
        try {
            var details = await _orderdetailsRepository.GetAllDetails();

            if (details == null) {
                return NotFound();
            }

            return Ok(details);
        }   
        catch {
            return StatusCode(500, "ERROR");
        }
    }

    [HttpGet]
    [Route("orders/{orderId:length(24)}")]
    public async Task<IActionResult> GetByOrderId(string orderId) {
        // var details = await _orderdetailsRepository.GetByOrderId(orderId);
        // return Ok(details);
        try {
            var details = await _orderdetailsRepository.GetByOrderId(orderId);

            if (details == null) {
                return NotFound();
            }

            return Ok(details);
        }   
        catch {
            return StatusCode(500, "ERROR");
        }
    }

    [HttpGet]
    [Route("courts/{courtId:length(24)}")]
    public async Task<IActionResult> GetByCourtId(string courtId) {
        try {
            var details = await _orderdetailsRepository.GetByCourtId(courtId);

            if (details == null) {
                return NotFound();
            }

            return Ok(details);
        }   
        catch {
            return StatusCode(500, "ERROR");
        }
    }

    [HttpGet("{id:length(24)}")]
    public async Task<IActionResult> GetById(string id) {
        try {
            var detail = await _orderdetailsRepository.GetById(id);

            if (detail == null) {
                return NotFound();
            }

            return Ok(detail);
        }
        catch {
            return StatusCode(500, "ERROR");
        }
    }

    [HttpPost]
    public async Task<IActionResult> Create(Orderdetails orderdetails) {
        try {
            var result = await _orderdetailsRepository.Create(orderdetails);

            if (result == false) {
                return NotFound("INVALID input");
            }

            return Ok(orderdetails);
        }
        catch {
            return StatusCode(500, "ERROR");
        }
    }

    [HttpPatch("{id:length(24)}")]
    [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]
    public async Task<IActionResult> Update(string id, string? orderId, string? courtId, int? totalMoney, string? usedDate) {
        try {
            var result = await _orderdetailsRepository.Update(id, orderId, courtId, totalMoney, usedDate);

            if (result == false) {
                return NotFound("INVALID input");
            }

            return Ok("Update successfully");
        }
        catch {
            return StatusCode(500, "ERROR");
        }
    }

    [HttpDelete]
    [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]
    public async Task<IActionResult> Delete(string id) {
        try {
            var result = await _orderdetailsRepository.Delete(id);

            if (result == false) {
                return NotFound();
            }

            return Ok("Delete Succeefully");
        }
        catch {
            return StatusCode(500, "ERROR");
        }
    }
}