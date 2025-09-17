export function validateForm<T extends Record<string, any>>(
  formData: T,
  requiredFields: (keyof T)[],
  extraRules?: (() => Partial<Record<keyof T | "general", string>> | null)[]
): Partial<Record<keyof T | "general", string>> {
  const errors: Partial<Record<keyof T | "general", string>> = {};

  requiredFields.forEach((field) => {
    if (!formData[field]) {
      switch (field) {
        case "idCard":
          errors[field] = "กรุณากรอกเลขประจำตัวประชาชน";
          break;
        case "birthDate":
          errors[field] = "กรุณาเลือกวันเกิด";
          break;
        case "prefix":
          errors[field] = "กรุณาเลือกคำนำหน้า";
          break;
        case "surName":
          errors[field] = "กรุณากรอกชื่อจริง";
          break;
        case "lastName":
          errors[field] = "กรุณากรอกนามสกุล";
          break;
        case "email":
          errors[field] = "กรุณากรอกอีเมล";
          break;
        case "phone":
          errors[field] = "กรุณากรอกเบอร์โทรศัพท์";
          break;
        default:
          errors[field] = "กรุณากรอกข้อมูลให้ครบถ้วน";
      }
    }
  });

  // ตรวจ rule เสริม
  if (extraRules) {
    for (const rule of extraRules) {
      const result = rule();
      if (result) {
        Object.assign(errors, result);
      }
    }
  }

  return errors;
}
