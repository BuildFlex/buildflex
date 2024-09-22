import {
  AppleIcon,
  AsanaIcon,
  BoxIcon,
  CodaIcon,
  DropboxIcon,
  FacebookIcon,
  GoogleDriveIcon,
  GoogleSheetIcon,
  JiraIcon,
  JsonIcon,
  MondayDotComIcon,
  MSAccessIcon,
  MSExcelIcon,
  NotionIcon,
  SmartSheetIcon,
  TrelloIcon,
} from '@/components/icons/quickly-upload';
import Text from '@/components/typography/Text';
import {
  Calendar1,
  Code,
  DocumentCode2,
  DocumentText,
  Note,
} from 'iconsax-react';
const QuicklyUploadItems = [
  { key: 'csv', icon: DocumentText, title: 'CSV file' },
  { icon: MSExcelIcon, title: 'Microsoft Excel', key: 'excel' },
  { icon: GoogleSheetIcon, title: 'Google Sheets', key: 'google-sheets' },
  { icon: Code, title: 'Paste table data', key: 'paste-table-data' },
  { icon: BoxIcon, title: 'Box', key: 'box' },
  { icon: AppleIcon, title: 'Apple Numbers', key: 'apple-numbers' },
  { icon: JiraIcon, title: 'Jira', key: 'jira' },
  { icon: MondayDotComIcon, title: 'monday.com', key: 'monday' },
  { icon: DropboxIcon, title: 'Dropbox', key: 'dropbox' },
  { icon: MSAccessIcon, title: 'Microsoft Access', key: 'microsoft-access' },
  { icon: DocumentCode2, title: 'XML', key: 'xml' },
  { icon: Calendar1, title: 'Calendar', key: 'calendar' },
  { icon: SmartSheetIcon, title: 'Smartsheet', key: 'smartsheet' },
  { icon: Note, title: 'Contacts', key: 'contacts' },
  { icon: FacebookIcon, title: 'Facebook', key: 'facebook' },
  { icon: TrelloIcon, title: 'Trello', key: 'trello' },
  { icon: GoogleDriveIcon, title: 'Google Drive', key: 'google-drive' },
  { icon: NotionIcon, title: 'Notion', key: 'notion' },
  { icon: AsanaIcon, title: 'Asana', key: 'asana' },
  { icon: CodaIcon, title: 'Coda', key: 'coda' },
  { icon: JsonIcon, title: 'JSON', key: 'json' },
];

const QuicklyUploadContent = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {QuicklyUploadItems.map((item) => (
        <button
          key={item.key}
          className="flex hover:bg-gray-50 gap-2 items-center w-[200px] h-10 px-3 rounded-lg border border-borderColor"
        >
          <item.icon size={20} />
          <Text as="span" variant="B2-Regular">
            {item.title}
          </Text>
        </button>
      ))}
    </div>
  );
};

export default QuicklyUploadContent;
