import React from 'react'
import { Text } from 'react-native'

export function Privacy({ type }) {
  if (type == 'title')
    return (
      <Text>
        개인정보처리방침
      </Text>
    )
  else
    return (
      <Text>
        주식회사 스포티스트(이하 “회사”)는 라인업 서비스(이하 “서비스”)를 이용하는 이용자(이하 “회원”)들의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보처리방침을 가지고 있습니다.{`\n`}{`\n`}
        제1조 (개인정보의 수집, 이용 목적){`\n`}
        ① 회원가입 및 서비스 이용 과정에서 회원으로부터 수집•이용하는 개인정보는 아래와 같습니다.{`\n`}{`\n`}
        [필수 수집 항목]{`\n`}
        1. 회원 가입{`\n`}
        수집·이용 목적 : 서비스 가입 및 활동{`\n`}
        수집·이용 항목 : 닉네임{`\n`}
        보유기간 : 서비스 탈퇴 후 3개월 또는 관계 법령에 따른 기간{`\n`}{`\n`}
        2. 자동 생성 정보{`\n`}
        수집·이용 목적 : 서비스 이용 및 상담, 부정이용 확인∙방지, 통계•분석{`\n`}
        수집·이용 항목 : 쿠키, 서비스 이용기록(방문일시, IP, 불량이용 기록 등), 기기정보(고유기기식별값, OS버전){`\n`}
        보유기간 : 서비스 탈퇴 후 3개월 또는 관계 법령에 따른 기간{`\n`}{`\n`}
        [선택 수집 항목]{`\n`}
        1. 광고성 정보{`\n`}
        수집·이용 목적 : 서비스 관련 광고성 정보 전송{`\n`}
        수집·이용 항목 : 이메일, 앱푸시{`\n`}
        보유기간 : 서비스 탈퇴 후 3개월 또는 관계 법령에 따른 기간{`\n`}
        2. 부가 정보{`\n`}
        수집·이용 목적 : 이용자 분석 및 통계{`\n`}
        수집·이용 항목 : 생년월일, 성별{`\n`}
        보유기간 : 서비스 탈퇴 후 3개월 또는 관계 법령에 따른 기간{`\n`}{`\n`}
        ② 회사는 위와 같이 회원의 개인정보를 수집하고 있습니다. 단, 회원의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)와 고유식별정보는 수집하지 않습니다.{`\n`}
        ③ 모바일 어플리케이션을 통해 서비스 이용 시 단말기 정보에 접근하는 것을 고지하고 승인을 받고 있습니다. 모바일 어플리케이션을 통한 단말기 정보 접근 권한은 필요 시 필수 또는 선택적으로 이용자에게 요청하며, 이는 단말기 내 “설정”을 통해 권한 변경이 가능합니다.{`\n`}{`\n`}{`\n`}
        제2조 (개인정보의 목적 외 사용 및 제3자에 대한 제공){`\n`}
        회사는 서비스 회원의 별도 동의가 있는 경우나 법령에 규정된 경우를 제외하고 회원의 개인정보를 제3자에게 제공하고 있지 않습니다. 또한, 정보 공개 시 회사가 선택한 연락 수단으로 이를 회원에게 별도 통지합니다.{`\n`}{`\n`}
        제3조 (정보주체의 권리){`\n`}
        ① 회원은 서비스에 로그인하여 ‘마이페이지’에서 개인정보를 열람/정정할 수 있습니다. 단, 회원아이디(이메일)는 특정 사유에 따라서만 정정할 수 있습니다.{`\n`}
        ② 관련 법령에서 요구되는 경우 그러한 법령에서 부여하는 요건과 제한에 따라, 회원은 회사에 개인정보 관련 권리를 행사할 수 있습니다. 예를 들어 한국에서, 회원은 회사에 개인정보 처리 정지 및 삭제, 개인정보의 수집, 이용에 대한 동의 철회를 요구할 수 있습니다.{`\n`}
        ③ 회원은 입력한 개인정보에 오류가 있을 경우 정정을 요구할 수 있으나, 정정 전/후의 개인정보가 오류에 해당하지 아니하거나 이러한 절차를 악용할 경우 회사는 오류를 정정하지 못하는 사유를 알려드립니다.{`\n`}
        ④ 본조의 권리는 official@sportist.co.kr로 연락하심으로써 행사할 수 있습니다.{`\n`}{`\n`}
        제4조 (개인정보의 파기){`\n`}
        ① 회사는 원칙적으로 개인정보 이용 목적이 달성된 후 또는 회원의 해지(탈퇴신청, 직권탈퇴 포함) 시 해당 정보를 관계법령 준수 및 개인정보의 수집 목적을 달성을 위하여 아래 명시한 일정 기간 보관 후 파기합니다.{`\n`}
        - 부정 이용 방지를 위해 탈퇴 신청 후 3개월간 회원가입 시 입력한 정보 보존{`\n`}
        - 관계 법령에 따른 보존{`\n`}
        ② 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하고 기록물, 인쇄물 등 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각합니다.{`\n`}
        ③ 회사는 회원가입 후 1년 동안 서비스를 이용하지 않은 휴면계정의 개인정보를 별도로 분리보관합니다. 분리 보관된 개인정보는 4년간 보관 후 파기합니다.{`\n`}
        회사는 휴면계정 회원에게 유효기간이 도래하기 최소 30일 전까지는 회원에게 통지하여야 하고 통지 내용은 아래와 같습니다.{`\n`}
        - 개인정보의 파기 또는 분리 저장 관리되는 사실{`\n`}
        - 파기 일시{`\n`}
        - 파기되는 개인정보 항목{`\n`}{`\n`}
        제5조 (개인정보의 자동 수집장치의 설치·운영 및 그 거부에 관한 사항){`\n`}
        “회사”는 이용자의 정보를 수시로 저장하고 찾아내는 “쿠키(cookie)” 등을 사용합니다. "쿠키(cookie)"란 사이트 접속 시 이용자의 저장장치에 전송하는 특별한 텍스트 파일(text file)을 말합니다. 쿠키는 웹사이트가 이용자의 컴퓨터 인터넷 브라우저로 전송하는 소량의 정보이며, 컴퓨터 디스크에 저장됩니다. 모바일 애플리케이션과 같이 쿠키 기술을 사용할 수 없는 경우에는 쿠키와 유사한 기능을 수행하는 기술(광고식별자 등)을 사용할 수도 있습니다.{`\n`}
        - 쿠키 등 사용 목적 로그인 식별/이용자의 사용 기록/기존 홈페이지 방문 또는 앱 사용 회수 파악 등을 통한 개인 맞춤 “서비스” 제공 등을 위해 쿠키를 운용합니다. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.{`\n`}
        - 쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 앱이나 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.{`\n`}{`\n`}
        제6조 (개인정보보호를 위한 기술적/관리적 대책){`\n`}
        ① 회사는 회원의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조, 또는 훼손되지 않도록 안전성 확보를 위하여 합리적인 조치를 취할 수 있으며, 이를 위한 기술적 대책으로는 다음과 같은 것이 있습니다.{`\n`}
        가. 회원의 개인정보는 비밀번호 및 암호화된 정보에 의해 보호되고 있습니다. 그러나 회원의 비밀번호나 개인정보는 공공장소에서의 인터넷사용 등 여러 방법으로 타인에게 알려질 가능성이 높으므로 이의 보호를 철저히 하는 것이 무엇보다 중요합니다. 그러므로 회원께서도 개인의 정보를 타인에게 유출시키거나 제공하여서는 안되며, 자신의 개인정보를 책임 있게 관리하여야 합니다. 이러한 회원 개인의 실수나 기본적인 인터넷의 위험성 등 회사 측의 고의나 과실에 의하지 않은 문제에 대해서 회사는 책임을 지지 않습니다.{`\n`}
        나. 회원의 개인정보는 기본적으로 비밀번호 및 암호화된 정보에 의해 보호되며, 파일 및 전송 데이터를 암호화하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.{`\n`}
        다. 회사는 백신프로그램을 이용하여 컴퓨터 바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있으며 백신프로그램은 주기적으로 업데이트 됩니다.{`\n`}
        라. 회사는 해킹 및 바이러스 등에 의하여 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해, 외부로부터의 침입탐지 및 침입차단 시스템을 두어 관리하고 있습니다.{`\n`}
        ② 회사는 회원의 개인정보보호의 중요성을 인식하고 있으며 이를 위해 개인정보처리직원을 합리적으로 제한하고 있으며 개인정보보호책임자가 처리직원을 대상으로 교육을 주기적으로 실시하여 개인정보보호를 위해 최선을 다하고 있습니다. 또한 본 정책에 명시된 이행사항 및 관련 직원의 준수여부를 정기적으로 점검하여 위반내용이 있는 경우 이를 시정 또는 개선하고 기타 필요한 조치를 취하도록 하고 있습니다.{`\n`}{`\n`}
        제7조 (의견수렴 및 불만처리){`\n`}
        회사는 개인정보보호와 관련한 회원들의 의견과 불만을 제기하여 원활하게 소통과 해결을 할 수 있는 고객상담창구를 운영하고 있습니다. 한국의 경우, 회원과 회사가 개인정보보호와 관련하여 분쟁이 발생하여 개인정보 침해에 관한 상담이 필요한 경우에는 한국인터넷진흥원 개인정보침해신고센터, 경찰청 사이버안전국 등으로 문의하실 수 있습니다.{`\n`}
        개인정보침해신고센터	http://privacy.kisa.or.kr  전화번호: 118{`\n`}
        개인정보 분쟁조정위원회	http://www.kopico.go.kr	  전화번호: 1833-6972{`\n`}
        대검찰청 사이버수사과	http://www.spo.go.kr     전화번호: 1301{`\n`}
        경찰청 사이버안전국	http://cyber.go.kr	  전화번호: 182{`\n`}{`\n`}
        제8조 (개인정보보호책임자 등){`\n`}
        회사는 개인정보보호책임자를 지정하여 회원들의 소중한 개인정보보호 업무에 최선의 노력을 다하고 있습니다.{`\n`}
        회원께서 서비스에 개인정보와 관련한 문의, 의견, 불만을 제기하고자 하실 경우에는 아래의 연락처나 이메일로 문의해주시기 바랍니다. 신속하고 성실하게 답변해 드리겠습니다.{`\n`}{`\n`}
        개인정보보호책임자{`\n`}
        성명	이진우{`\n`}
        이메일	official@sportist.co.kr{`\n`}{`\n`}
        제9조 (고지의무){`\n`}
        현 개인정보처리방침은 2022년 07월 20일 제정되었으며, 정부 및 회사의 정책 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 홈페이지를 통해 사전 공지하며, 회원에 중대한 영향을 미치는 사항은 30일전에 고지합니다.{`\n`}
        개인정보 처리방침 버전번호: V1.0{`\n`}
        개인정보 처리방침 시행일자: 2022.7.20{`\n`}
      </Text>
    )
}