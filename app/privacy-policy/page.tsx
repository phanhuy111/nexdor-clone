'use client';

import Image from "next/image"
import Header from "@/components/header"
import Footer from "../../components/footer"
import StatsSection from "@/components/stats-section"
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"

export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }


  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      <main className="pb-10">

        <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
          {/* Section I: Terms of Service */}
          <h1 className="text-3xl font-bold mb-6 text-blue-900">I. Điều khoản sử dụng dịch vụ</h1>

          {/* Subsection 1.1 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.1. Định Nghĩa</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Dịch vụ”</span> – Phần mềm quản lý NexPOS chạy dưới tên miền{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>{' '}
            và ứng dụng NexPOS.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Ứng dụng NexPOS”</span> – Ứng dụng NexPOS phiên bản chính thức được tải trực tiếp từ các nền tảng phân phối ứng dụng, sau đây gọi tắt là “Cửa hàng ứng dụng”.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Website”</span> – Trang thông tin điện tử khi truy cập địa chỉ{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Nội dung”</span> – Hình ảnh, biểu tượng, bài viết, video được đăng trên Website.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Chủ tài khoản”</span> – Người đăng ký ban đầu; hoặc người giữ tài khoản quản trị; hoặc người truy cập tài khoản cửa hàng bằng tài khoản quản trị.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Cửa hàng”</span> – Tài khoản cửa hàng do khách hàng đặt có dạng trong đó phần abc123 do Chủ tài khoản tự đặt.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Tài khoản quản trị”</span> – Tài khoản được tạo ra đầu tiên khi chủ tài khoản đăng ký cửa hàng khách hàng trên{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Bạn”</span> – Chủ tài khoản hoặc các nhân viên được chủ tài khoản cấp tài khoản truy cập vào cửa hàng; những Bạn viếng thăm, tìm hiểu thông tin trên website{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“NexPOS”</span> – Công ty Cổ phần Công Nghệ NexDor.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Bên thứ ba”</span> – Khách hàng, đối tác, nhà cung cấp của cửa hàng hoặc của NexPOS.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Dữ liệu cửa hàng”</span> – Dữ liệu dưới dạng điện tử được lưu trữ trên cửa hàng được giới hạn truy cập bằng tài khoản do chủ tài khoản thiết lập.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Khu vực chung”</span> – Trang chủ{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>; màn hình đăng nhập; footer các trang, khu vực logo các trang trên giao diện web và ứng dụng NexPOS trên điện thoại thông minh.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Khu vực riêng”</span> – Trang màn hình bán hàng, phần nội dung các trang quản lý.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">“Tính năng”</span> – Tính năng hiện có và đang được cung cấp trên NexPOS.
          </p>

          {/* Subsection 1.2 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.2. Phạm vi áp dụng</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Điều khoản sử dụng này áp dụng cho Dịch vụ phần mềm quản lý cửa hàng NexPOS, phiên bản chính thức chạy trên máy chủ của NexPOS dưới tên miền chính thức{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>{' '}
            và ứng dụng NexPOS. NexPOS duy trì trang thông tin điện tử{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>{' '}
            và các tên miền phụ như một dịch vụ cung cấp cho khách hàng nhưng không giới hạn là các cá nhân, tổ chức sử dụng. Khi sử dụng Website này và bất kỳ dịch vụ nào tại đây có nghĩa là Bạn đã chấp nhận và đồng ý tuân theo bản Điều khoản sử dụng này...
          </p>

          {/* Subsection 1.3 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.3. Sử dụng hợp pháp</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Bạn phải nhận thức và chấp nhận rằng Bạn có trách nhiệm sử dụng Dịch vụ vào công việc kinh doanh dịch vụ phù hợp với pháp luật hiện hành và thuần phong mỹ tục Việt Nam. Bạn không được sử dụng dịch vụ để tuyên truyền nội dung đồi trụy, chống phá nhà nước, phát tán thư rác và / hoặc các thông tin không mong muốn đến những tổ chức và cá nhân khác trong hệ thống dưới mọi hình thức.
          </p>

          {/* Subsection 1.4 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.4. Quyền sở hữu trí tuệ</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Website{' '}
            <a href="http://www.nexdor.tech" className="text-blue-600 hover:underline">
              www.nexdor.tech
            </a>, ứng dụng NexPOS thuộc bản quyền của <span className="font-medium">CÔNG TY CỔ PHẦN CÔNG NGHỆ NexDor</span>. Tất cả nội dung tại Website thuộc sở hữu của NexPOS...
          </p>

          {/* Subsection 1.5 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.5. Bảo mật thông tin</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Bạn phải có trách nhiệm lưu giữ thông tin truy cập vào Cửa hàng để tránh trường hợp tài khoản bị đánh cắp và/ hoặc bị lạm dụng với mục đích không an toàn cho cả Bạn và NexPOS...
          </p>

          {/* Subsection 1.6 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.6. Xử lý sự cố</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Bạn có trách nhiệm thông báo ngay cho NexPOS khi phát hiện sự cố, tích cực phối hợp với NexPOS để khắc phục sớm nhất cho Bạn...
          </p>

          {/* Subsection 1.7 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.7. Giới hạn trách nhiệm</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            NexPOS sẽ không chịu bất kỳ trách nhiệm nào hoặc trách nhiệm liên đới đối với những hậu quả của việc truy cập trái phép đến máy chủ, Website, Ứng dụng NexPOS...
          </p>

          {/* Subsection 1.8 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.8. Đảm bảo cung cấp dịch vụ</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Website và các Dịch vụ, Tính năng được cung cấp trên cơ sở “có thể thực hiện được”. NexPOS không bảo đảm rằng Website hoặc Dịch vụ sẽ luôn sẵn sàng...
          </p>

          {/* Subsection 1.9 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.9. Tài liệu hướng dẫn sử dụng</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Bạn có thể truy cập và tra cứu tại hướng dẫn tại trang Hướng dẫn sử dụng hoặc tại Video hướng dẫn...
          </p>

          {/* Subsection 1.10 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.10. Sử dụng khu vực chung</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Bạn hiểu và chấp nhận rằng NexPOS có quyền quản lý, khai thác và sử dụng Khu vực chung trên Website theo quyết định và xem xét duy nhất của NexPOS...
          </p>

          {/* Subsection 1.11 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.11. Sử dụng khu vực riêng</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Bạn có toàn quyền sử dụng Khu vực riêng được bảo vệ bằng mật khẩu cho các hoạt động của mình...
          </p>

          {/* Subsection 1.12 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.12. Truy cập khu vực riêng</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Bạn hiểu và chấp nhận rằng NexPOS có quyền truy cập khu vực riêng của Bạn khi (i) NexPOS có được sự đồng ý từ phía Bạn...
          </p>

          {/* Subsection 1.13 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.13. Thông tin liên lạc</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            NexPOS khuyến khích Bạn liên hệ với Trung tâm Hỗ trợ khách hàng NexPOS qua tổng đài{' '}
            <span className="font-medium">1900 6522</span> từ 8 giờ 30 sáng đến 21 giờ mỗi ngày khi có nhu cầu hỗ trợ...
          </p>

          {/* Subsection 1.14 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.14. Thương hiệu</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Thương hiệu NexPOS đã được đăng ký độc quyền nhãn hiệu của NexPOS tại Việt Nam...
          </p>

          {/* Subsection 1.15 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.15. Điều khoản chung</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Trường hợp có bất kỳ điều khoản nào của Điều khoản sử dụng này hết hiệu lực hoặc không thể thi hành vì bất cứ lý do gì...
          </p>

          {/* Subsection 1.16 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.16. Ứng dụng NexPOS</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Nếu Bạn đã tải về Ứng dụng NexPOS từ Cửa hàng ứng dụng, các điều khoản sau đây sẽ được bổ sung và có hiệu lực...
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed">
            <li>Điều khoản này là thỏa thuận giữa Bạn và NexPOS, và không phải với Cửa hàng ứng dụng...</li>
            <li>Khi sử dụng Ứng dụng NexPOS, Bạn hiểu và chấp nhận nhận rằng chúng tôi có quyền sử dụng những API hệ thống sau...</li>
          </ul>

          {/* Subsection 1.17 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">1.17. Dịch vụ liên kết của bên thứ ba</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Dịch vụ liên kết là các dịch vụ gia tăng, có tính phí hoặc không có tính phí dịch vụ bởi NexPOS và Bên thứ ba...
          </p>

          {/* Section II: Privacy Policy */}
          <h1 className="text-3xl font-bold mt-10 mb-6 text-blue-900">II. Chính sách bảo mật</h1>

          {/* Subsection 2.1 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">2.1. Thông tin và dữ liệu nào sẽ được NexPOS thu thập</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            NexPOS sẽ đề nghị khách hàng cung cấp các dữ liệu cá nhân cơ bản bao gồm như sau:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed">
            <li>Tên đăng nhập, mật khẩu đăng nhập</li>
            <li>Email, số điện thoại, địa chỉ</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            khi khách hàng đăng ký sử dụng dịch vụ của NexPOS và một số thông tin và dữ liệu khác (nếu có) khi khách hàng muốn tương tác với một số nội dung trên website và ứng dụng NexPOS...
          </p>

          {/* Subsection 2.2 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">2.2. Dịch vụ, ứng dụng liên kết với NexPOS</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Để đảm bảo quyền lợi và trải nghiệm tốt nhất cho Khách hàng, NexPOS áp dụng một số điều khoản riêng khi Khách hàng sử dụng các dịch vụ, ứng dụng do NexPOS cung cấp hoặc có liên kết với NexPOS:
          </p>
          <div className="ml-4">
            <p className="font-medium text-gray-800 mb-2">
              A. Đối với khách hàng sử dụng Ứng dụng NexPOS từ Apple App Store hoặc GooglePlay, bạn hiểu rõ và đồng ý rằng NexPOS có quyền:
            </p>
            <ul className="list-decimal pl-6 mb-4 text-gray-700 leading-relaxed">
              <li>Lấy vị trí hiện tại của bạn;</li>
              <li>Ghi dữ liệu của Ứng dụng NexPOS lên thẻ nhớ;</li>
              <li>Truy cập vào Internet từ thiết bị của bạn.</li>
            </ul>
            <p className="font-medium text-gray-800 mb-2">
              B. Đối với tài khoản Facebook của Khách hàng khi liên kết NexPOS, NexPOS sẽ yêu cầu quyền truy cập các thông tin sau:
            </p>
            <ul className="list-decimal pl-6 mb-4 text-gray-700 leading-relaxed">
              <li>Quyền truy cập vào địa chỉ email của Trang (Fan Page) Facebook sử dụng để tích hợp với NexPOS;</li>
              <li>Quyền truy cập vào tập hợp các mục công khai trên Trang Facebook đã tích hợp với NexPOS;</li>
              <li>Cho phép truy cập vào tập hợp các mục công khai trên Tài khoản cá nhân của người dùng có tương tác với Trang Facebook tích hợp với NexPOS.</li>
              <li>Cho phép truy cập hộp thư trên Trang Facebook tích hợp với NexPOS thông qua NexPOS;</li>
              <li>Cho phép gửi và nhận tin nhắn, bình luận trên Trang Facebook tích hợp với NexPOS thông qua NexPOS.</li>
            </ul>
            <p className="font-medium text-gray-800 mb-2">
              C. Đối với tài khoản Zalo của Khách hàng khi liên kết với NexPOS, NexPOS sẽ yêu cầu quyền truy cập các thông tin sau:
            </p>
            <ul className="list-decimal pl-6 mb-4 text-gray-700 leading-relaxed">
              <li>Quyền truy cập vào ảnh đại diện, tên, ảnh bìa và mô tả của tài khoản Zalo Official Account sử dụng để tích hợp với NexPOS;</li>
              <li>Quyền truy cập vào thông tin họ tên, địa chỉ, số điện thoại của người dùng theo dõi (follow) tài khoản Zalo Official account sử dụng tích hợp với NexPOS;</li>
              <li>Cho phép gửi và nhận tin nhắn từ tài khoản Zalo Official Account tích hợp với NexPOS thông qua NexPOS.</li>
            </ul>
          </div>

          {/* Subsection 2.3 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">2.3. Phạm vi sử dụng thông tin</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            NexPOS sử dụng thông tin Khách hàng cung cấp để:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed">
            <li>Cung cấp các dịch vụ đến Khách hàng.</li>
            <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa Khách hàng và đơn vị Hỗ trợ kĩ thuật của NexPOS.</li>
            <li>Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Khách hàng hoặc các hoạt động giả mạo Khách hàng.</li>
            <li>Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt.</li>
            <li>NexPOS có trách nhiệm hợp tác cung cấp thông tin cá nhân Khách hàng khi có yêu cầu từ cơ quan nhà nước có thẩm quyền.</li>
            <li>Chia sẻ thông tin cần thiết cho bên đối tác nếu nhận được sự đồng ý của Khách hàng.</li>
          </ul>

          {/* Subsection 2.4 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">2.4. Thời gian lưu trữ thông tin</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Trong mọi trường hợp thông tin cá nhân Khách hàng sẽ được bảo mật hoàn toàn trên máy chủ của NexPOS...
          </p>

          {/* Subsection 2.5 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">2.5. Địa chỉ của đơn vị thu thập, quản lý thông tin và hỗ trợ Khách hàng</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-medium">CÔNG TY CỔ PHẦN CÔNG NGHỆ NEXDOR</span>
          </p>

          {/* Subsection 2.6 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">2.6. Phương tiện và công cụ để Khách hàng tiếp cận và chỉnh sửa dữ liệu của mình</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu NexPOS thực hiện việc này...
          </p>

          {/* Subsection 2.7 */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">2.7. Cam kết bảo mật thông tin cá nhân Khách hàng</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            NexPOS cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của NexPOS và các quy định pháp luật hiện hành bảo vệ dữ liệu cá nhân...Việc thu thập và sử dụng thông tin của mỗi Khách hàng chỉ được thực hiện khi có sự đồng ý hợp pháp của Khách hàng đó, trừ những trường hợp pháp luật có quy định khác.NexPOS cam kết: Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ ba nào về thông tin cá nhân của Khách hàng khi không có sự cho phép hoặc đồng ý hợp pháp từ Khách hàng, trừ những trường hợp pháp luật có quy định khác. Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Khách hàng bao gồm thông tin hóa đơn, chứng từ kế toán số hóa tại khu vực dữ liệu trung tâm an toàn của NexPOS.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

