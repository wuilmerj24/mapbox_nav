import Foundation

@objcMembers
@objc(NSCSwiftTimeRangerExt)
public class NSCSwiftTimeRangerExt: NSObject{
    lazy var dateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.timeZone = TimeZone(abbreviation: "UTC")
        dateFormatter.dateFormat = "hh:mm a"
        return dateFormatter
    }()

    @objc func updateTexts(_ sender: AnyObject, startPointValue: CGFloat, endPointValue:  CGFloat) -> [String: Any] {
        var mutableStartPointValue = startPointValue
        var mutableEndPointValue = endPointValue
        adjustValue(value: &mutableStartPointValue)
        adjustValue(value: &mutableEndPointValue)

        let bedtime = TimeInterval(startPointValue)
        let bedtimeDate = Date(timeIntervalSinceReferenceDate: bedtime)

        let wake = TimeInterval(endPointValue)
        let wakeDate = Date(timeIntervalSinceReferenceDate: wake)

        let duration = wake - bedtime
        let durationDate = Date(timeIntervalSinceReferenceDate: duration)

        dateFormatter.dateFormat = "HH:mm"

        dateFormatter.dateFormat = "hh:mm a"
        var diccionario: [String: Any] = [:]
        diccionario["start"] = dateFormatter.string(from: bedtimeDate)
        diccionario["end"] = dateFormatter.string(from: wakeDate)
        return diccionario
    }

    func adjustValue(value: inout CGFloat) {
        let minutes = value / 60
        let adjustedMinutes =  ceil(minutes / 5.0) * 5
        value = adjustedMinutes * 60
    }
}
