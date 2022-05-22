uniform vec3 uColor;

varying vec3 v_eye;
varying vec3 v_normal;



float Fresnel(vec3 eyeVector, vec3 worldNormal) {
  return pow(1.0 + dot(eyeVector, worldNormal), 2.5);
}

void main() {
  vec3 color = vec3(uColor);

  float fresnel = Fresnel(v_eye, normalize(v_normal));
  float a = pow(fresnel * 0.1, 1.2);
  color *= fresnel;

  gl_FragColor = vec4(color, a);
}